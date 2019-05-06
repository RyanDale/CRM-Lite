# CRM Lite
Node app for managing Contacts and Accounts. Both contacts and accounts can be created in the system. Both record types can have notes associated to them from their respective detail views. On the accounts detail view, you can see contacts associated with them. Contacts can also be deleted via the UI.

The app is integrated with Mixpanel for usage analytics. Page views, object creations, and object modifications are tracked as events with metadata.

Web app can be accessed [here](https://shielded-falls-48350.herokuapp.com/).

Built using: Node.js, Express.js, MongoDB, and React.

Technical concepts:
+ Routing (both in API and SPA routing in React)
+ Component reuse (NoteCreate are NoteTimeline are utilized by both the Contact and Account details view)
+ One to Many relationships (with both nested and embedded documents)
+ Simple REST API
+ Redux used to manage state
