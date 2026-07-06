import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'rog08jar',
    dataset: 'production'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  // autoUpdates: true,
  deployment: { autoUpdates: true, appId: `i87i2b9n280ypquendb4wj6p` }

})
