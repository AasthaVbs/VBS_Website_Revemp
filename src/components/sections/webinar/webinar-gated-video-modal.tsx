"use client";

import { useCallback, useEffect, useState, type CSSProperties } from "react";
import Modal from "react-bootstrap/Modal";

import { ZohoPublicIframeForm } from "@/components/zoho/zoho-public-iframe-form";
import { YoutubeVideoPlayOverlay } from "@/components/sections/webinar/youtube-video-play-overlay";
import {
  ZOHO_MEP_WEBINAR_VIDEO_FORM_BOTTOM_CROP_PX,
  ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_HEIGHT_PX,
  ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_ID,
  ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_SRC,
  ZOHO_MEP_WEBINAR_VIDEO_FORM_MODAL_MAX_WIDTH_PX,
  ZOHO_MEP_WEBINAR_VIDEO_FORM_SIDE_CROP_PX,
  ZOHO_MEP_WEBINAR_VIDEO_FORM_SUBMITTED_KEY,
  ZOHO_MEP_WEBINAR_VIDEO_FORM_TOP_CROP_PX,
  ZOHO_MEP_WEBINAR_VIDEO_FORM_VISIBLE_HEIGHT_PX,
} from "@/utils/zoho-contact-form-embed";

function toEmbedUrl(youtubeUrl: string) {
  if (!youtubeUrl) return "";
  return `${youtubeUrl.replace("watch?v=", "embed/")}?autoplay=1&rel=0`;
}

type WebinarGatedVideoModalProps = {
  thumbnailSrc: string;
  videoUrl: string;
  formVariant?: "none" | "mep";
  formStorageKey?: string;
  thumbnailAlt?: string;
  modalClassName?: string;
};

export function WebinarGatedVideoModal({
  thumbnailSrc,
  videoUrl,
  formVariant = "none",
  formStorageKey = ZOHO_MEP_WEBINAR_VIDEO_FORM_SUBMITTED_KEY,
  thumbnailAlt = "Play webinar video",
  modalClassName = "video-modal",
}: WebinarGatedVideoModalProps) {
  const requiresMepForm = formVariant === "mep";
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(!requiresMepForm);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const embedUrl = toEmbedUrl(videoUrl);

  useEffect(() => {
    if (!requiresMepForm || typeof window === "undefined") return;
    if (sessionStorage.getItem(formStorageKey) === "true") {
      setFormSubmitted(true);
    }
  }, [formStorageKey, requiresMepForm]);

  useEffect(() => {
    if (!isPlaying) {
      setIsVideoLoading(false);
    }
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying || !isVideoLoading) return undefined;

    const timeoutId = window.setTimeout(() => {
      setIsVideoLoading(false);
    }, 10000);

    return () => window.clearTimeout(timeoutId);
  }, [isPlaying, isVideoLoading, embedUrl]);

  const beginVideoLoading = useCallback(() => {
    setIsVideoLoading(true);
  }, []);

  const startPlayback = useCallback(() => {
    setIsPlaying(true);
    beginVideoLoading();
  }, [beginVideoLoading]);

  const handleOpenModal = () => {
    setShowModal(true);
    if (!requiresMepForm || formSubmitted) {
      startPlayback();
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setIsVideoLoading(false);
    if (requiresMepForm && !formSubmitted) {
      setIsPlaying(false);
    }
  };

  const handleFormSuccess = useCallback(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(formStorageKey, "true");
    }
    setFormSubmitted(true);
    startPlayback();
  }, [formStorageKey, startPlayback]);

  const handleVideoLoad = () => {
    setIsVideoLoading(false);
  };

  const showFormGate = requiresMepForm && !isPlaying;

  const gateStyle = showFormGate
    ? ({
        "--webinar-form-gate-modal-width": `${ZOHO_MEP_WEBINAR_VIDEO_FORM_MODAL_MAX_WIDTH_PX}px`,
        "--webinar-form-gate-visible-height": `${ZOHO_MEP_WEBINAR_VIDEO_FORM_VISIBLE_HEIGHT_PX}px`,
        "--webinar-form-gate-iframe-height": `${ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_HEIGHT_PX}px`,
        "--webinar-form-gate-top-crop": `${ZOHO_MEP_WEBINAR_VIDEO_FORM_TOP_CROP_PX}px`,
        "--webinar-form-gate-side-crop": `${ZOHO_MEP_WEBINAR_VIDEO_FORM_SIDE_CROP_PX}px`,
        "--webinar-form-gate-side-crop-total": `${ZOHO_MEP_WEBINAR_VIDEO_FORM_SIDE_CROP_PX * 2}px`,
        "--webinar-form-gate-bottom-crop": `${ZOHO_MEP_WEBINAR_VIDEO_FORM_BOTTOM_CROP_PX}px`,
      } as CSSProperties)
    : undefined;

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="video-box webinar-gated-video h-100 position-relative"
        style={{ cursor: "pointer" }}
        onClick={handleOpenModal}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            handleOpenModal();
          }
        }}
        aria-label={thumbnailAlt}
      >
        <div
          className="video-thumbnail position-relative rounded-2 overflow-hidden"
          style={{
            backgroundImage: `url(${thumbnailSrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            paddingTop: "56.25%",
          }}
        >
          <YoutubeVideoPlayOverlay className="z-[2]" />
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleClose}
        size={isPlaying ? "xl" : undefined}
        centered
        className={modalClassName}
        dialogClassName={showFormGate ? "webinar-form-gate-modal" : undefined}
        backdrop="static"
        keyboard={false}
        style={gateStyle}
      >
        <Modal.Body className={`position-relative bg-white ${isPlaying ? "p-2" : "p-0"}`}>
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close"
            className="top-closebtn text-dark border-0"
          >
            ×
          </button>

          {showFormGate ? (
            <div className="webinar-video-form-gate">
              <ZohoPublicIframeForm
                iframeId={ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_ID}
                iframeSrc={ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_SRC}
                title="MEP - Webinar contact us Form"
                initialHeight={ZOHO_MEP_WEBINAR_VIDEO_FORM_IFRAME_HEIGHT_PX}
                cropHeader=""
                headerCropPx={0}
                lockHeight
                redirectOnSubmit={false}
                onSubmitSuccess={handleFormSuccess}
                className="webinar-video-form-gate__iframe"
                frameClassName="vbs-zoho-iframe-form__frame webinar-video-form-gate__frame"
              />
            </div>
          ) : (
            <div className="ratio ratio-16x9 webinar-video-player position-relative">
              {isVideoLoading ? (
                <div className="webinar-video-loader" aria-live="polite" aria-busy="true">
                  <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading video...</span>
                  </div>
                  <p className="webinar-video-loader__text mb-0">Loading video...</p>
                </div>
              ) : null}
              <iframe
                key={embedUrl}
                src={embedUrl}
                title="Webinar video"
                className={
                  isVideoLoading
                    ? "webinar-video-player__frame is-loading"
                    : "webinar-video-player__frame"
                }
                onLoad={handleVideoLoad}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}
