const jsonArray = [
   {
      "label": "File",
      "icon": "bi bi-file-text",
      "items": [
         {
            "label": "New",
            "icon": "bi bi-plus",
            "items": [
               {
                  "label": "Bookmark",
                  "icon": "bi bi-bookmarks"
               },
               {
                  "label": "Video",
                  "icon": "bi bi-camera-video"
               }
            ]
         },
         {
            "label": "Delete",
            "icon": "bi bi-trash",
            "command": (event) => {
               console.log("Delete Clicked", event);
            }

         },
         {
            "separator": true
         },
         {
            "label": "Export",
            "icon": "bi bi-arrow-up-right-square",
            "command": (event) => {
               console.log("Export Clicked", event);
            }
         }
      ]
   },
   {
      "label": "Edit",
      "icon": "bi bi-pencil-square",
      "items": [
         {
            "label": "Left",
            "icon": "bi bi-justify-left"
         },
         {
            "label": "Right",
            "icon": "bi bi-justify-right"
         },
         {
            "label": "Center",
            "icon": "bi bi-align-center"
         },
         {
            "label": "Justify",
            "icon": "bi bi-justify"
         }
      ]
   },
   {
      "label": "Users",
      "icon": "bi bi-people",
      "items": [
         {
            "label": "New",
            "icon": "bi bi-person-plus"
         },
         {
            "label": "Delete",
            "icon": "bi bi-person-dash"
         },
         {
            "label": "Search",
            "icon": "bi bi-search",
            "items": [
               {
                  "label": "Filter",
                  "icon": "bi bi-filter",
                  "items": [
                     {
                        "label": "Print",
                        "icon": "bi bi-printer"
                     }
                  ]
               },
               {
                  "icon": "bi bi-list",
                  "label": "List"
               }
            ]
         }
      ]
   },
   {
      "label": "Events",
      "icon": "bi bi-calendar-event",
      "items": [
         {
            "label": "Edit",
            "icon": "bi bi-pencil-square",
            "items": [
               {
                  "label": "Save",
                  "icon": "bi bi-save"
               },
               {
                  "label": "Delete",
                  "icon": "bi bi-trash"
               }
            ]
         },
         {
            "label": "Archieve",
            "icon": "bi bi-archive",
            "items": [
               {
                  "label": "Remove",
                  "icon": "bi bi-x-square-fill"
               }
            ]
         }
      ]
   }, {
      "separator": true
   },
   {
      "label": "Quit",
      "icon": "bi bi-x-circle-fill",
      "command": (event) => {
         console.log("Quit Clicked", event);
      }
   }
]