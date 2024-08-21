export const labels = {
  toasts: {
    titles: {
      error: "Error",
      warning: "Warning",
      success: "Success",
      info: "Info",
    },
  },
  pages: {
    tasks: {
      title: "webscheduler",
      description: "webscheduler",
    },
    pending: {
      title: "Pending tasks • webscheduler",
      description: "webscheduler",
    },
    running: {
      title: "Running tasks • webscheduler",
      description: "webscheduler",
    },
    cancelled: {
      title: "Cancelled tasks • webscheduler",
      description: "webscheduler",
    },
    failed: {
      title: "Failed tasks • webscheduler",
      description: "webscheduler",
    },
    completed: {
      title: "Completed tasks • webscheduler",
      description: "webscheduler",
    },
    task: {
      title: (id: string) => `Task ${id} • webscheduler`,
      description: "webscheduler",
      notFound: {
        text: "Requested task not found.",
      },
    },
    notFound: {
      title: "Not Found • webscheduler",
      description: "webscheduler",
      text: "Page not found",
    },
    error: {
      title: "Error • webscheduler",
      description: "webscheduler",
      text: "Something went wrong",
      buttons: {
        retry: {
          label: "Retry",
        },
      },
    },
  },
  widgets: {
    taskIndex: {
      tiles: {
        pending: {
          text: "Pending",
        },
        running: {
          text: "Running",
        },
        cancelled: {
          text: "Cancelled",
        },
        failed: {
          text: "Failed",
        },
        completed: {
          text: "Completed",
        },
      },
    },
    taskList: {
      tiles: {
        task: {
          text: (id: string) => id,
        },
      },
      empty: {
        text: "No tasks.",
      },
    },
    task: {
      buttons: {
        cancel: {
          label: "Cancel",
        },
      },
    },
  },
};
