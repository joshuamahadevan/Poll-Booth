NORMAL MODE:
* User management system with authentication
* teams with ability to invite users
* poll with variable no of text options within team
* dashboard with all polls
* show results of poll after admin ends it
* UI

HACKER MODE:
* auto ending polls
* support different types of options in poll
* notify activities to admin
* validation during registration
* plot/graph poll results
* prevent sql injection

HACKER++:
* multiple user roles
* mail notifications
* Google Calender API integration
* chat and real tiime video conferencing

ROUTES:
/api/users/ -> user dashboard (display teams the user is a part of) and team invites
/api/user/login -> login
/api/user/register -> register

/api/team/ -> redirect to /api/user/
/api/teams/new -> creating new team
/api/teams/:id -> specific team polls and stuff