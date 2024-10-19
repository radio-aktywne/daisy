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
      title: "daisy",
      description: "daisy",
    },
    pending: {
      title: "Pending tasks • daisy",
      description: "daisy",
    },
    running: {
      title: "Running tasks • daisy",
      description: "daisy",
    },
    cancelled: {
      title: "Cancelled tasks • daisy",
      description: "daisy",
    },
    failed: {
      title: "Failed tasks • daisy",
      description: "daisy",
    },
    completed: {
      title: "Completed tasks • daisy",
      description: "daisy",
    },
    task: {
      title: (id: string) => `Task ${id} • daisy`,
      description: "daisy",
      notFound: {
        text: "Requested task not found.",
      },
    },
    notFound: {
      title: "Not Found • daisy",
      description: "daisy",
      text: "Page not found",
    },
    error: {
      title: "Error • daisy",
      description: "daisy",
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
