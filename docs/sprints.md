# OPERATIONS

## DAILY STANDUPS

Every day at 10:00 the team gathers and spends a total of 15 minutes reporting to each other. Each team member summarizes what he did the previous day, what he will do today, and what impediments he faces.

Standing up at these meetings will help keep it short. Topics that require additional attention may be discussed by whomever is interested after every team member has reported.

## SPRINTS

During the development phase, we will break up our project into a series of Sprints. A Sprint is a fixed period of time that follows a consistent flow structure that provides an organised, yet agile mean to complete a series of pre-planned tasks.

### Sprint Structure

The Sprint structure will be in the form of boards on Trello, our choice of software. Each task or user-story is captured in the form of a card. Each project has the same board structure, defined as follows:

BACKLOG: to be considered as the roadmap of all tasks that remain to be done for a project. Prioritized from top to bottom, the highest cards are next to go into the upcoming Sprint.
SPRINT: All tasks that have been assigned to be completed in the immediate sprint (allocated during the Sprint Planning session).
TODAY: Tasks that are assigned to be completed on that day. No cards to remain in this column by end of respective day.
IN PROGRESS: Tasks are are currently being worked on.
CODE REVIEW: Tasks that have been pull-requested and await code review.
QA: Tasks that have been merged into the staging repository and are ready to undergo QA.
DONE: Tasks that have passed QA, and are thus considered completed.
LIVE: Tasks that have been deployed to the live environment of the project.
ARCHIVE: Tasks that were not longer needed to be completed

### Sprint Process

For our purposes, our Sprints will be 2-weeks long unless otherwise and specifically defined, and will always start on a Monday. A usual Sprint to adhere to the following process:

- Friday (before the planned Sprint): Sprint planning session to define the upcoming Sprint.
- Monday to Friday of Week 1: Work on tasks every day, moving cards along the relevant columns, and updating the Today column on a daily basis.
- Monday to Tuesday of Week 2:  Work on tasks every day, moving cards along the relevant columns, and updating the Today column on a daily basis. All code and tasks to be completed by end of 2nd Tuesday.
- Wednesday of Week 2: Developers to test and consolidate all work done thus far, create pull requests, review code and move all completed cards to QA.
- Thursday of Week 2: QA team to run through all tasks in QA column, identifying acceptance bugs as they go (to be resolved throughout the day).
- Friday of Week 2: Retrospective of all projects, and Sprint Planning of next Sprint.

Only the Product Owner can move cards backwards. If a task is incomplete, or requires further work past QA, it must undergo review and discussion with the Product Owner prior to moving it backwards in the process.

### Sprint Planning

Every 2nd Friday, the project lead will sit together with the developers to plan the upcoming Sprint for their respective projects.

These sessions are limited to 1 hour, and adhere to following process:

- Project lead to define overarching Sprint Goal.
- Team reviews backlog items based on priority and moves a reasonable selection from the top of the Backlog column to the Sprint column.
- Discuss each item in detail, expanding where necessary, to ensure everyone understands the task involved.
- Developers then take rest of the day exploring the tasks requiring, breaking up the greater tasks into granular tasks, and planning their approach of resolving them.
- Developers to assign points to each task in the Sprint column, adhering to the Point System Policy. At this stage, some items move back to the Backlog or more items added to the Sprint column, based on capacity available.
- At the end of day, developers to commit to completing all items within their respective Sprint columns by the end of said Sprint.

## TESTING & QA

The most important trait of our quality assurance process is that is happens throughout the development process, right from the beginning when the project’s scope is defined through user stories, all the way until the product is ready to go to market.

To adhere to such, QA is a mixture of exercises, rules and tools with shared responsibility across all team members, depending on the stages in which it takes place.

### Acceptance Criteria

Acceptance criteria refers to a condition, or set of conditions, that act as tests for a single user story to be satisfied.

For example, consider the following user story: “As a user, I want to log into the app so I can use its features”

Some standard acceptance criteria would be:

* Can a user login successfully?
* Is the user alerted when the credentials are incorrect?
* Is the user notified when there is no online connectivity to perform the action?

A user story is only deemed completed should it pass the acceptance criteria preset during the Sprint Planning.

### Developer Testing

When working on a task, the onus is on the developer working on the story to test it against the acceptance criteria outlined. A task is not deemed to be completed, or ready for further QA further down the sprint, until the assigned developer has undertaken steps to fully test the solution to ensure it meets all of the acceptance criteria for it.

The means of testing solutions are subjected to the context of the task and the preference of the developer, but can be done as follows:

* Test Driven Development - developer writes a unit test, or spec, PRIOR to working on the task. The spec is defined by the acceptance criteria and is assigned dummy data/variables with relevant expected results to ensure the criteria met.
* Post-development unit tests - unit tests and spec are written after the feature development, and are run thereafter to ensure they pass.
* Manual user-interface testing - testing the feature against its acceptance criteria through the UI that it forms part of. This is compulsory, and can be done in addition to other methods of testings or as the sole means of testing, yet considered to be the last form of testing prior to passing the task along the Sprint process.

### Unit Testing

If a new feature is added and should be tested, a spec must be written for it and form part of the project’s overarching test suite.


### Milestone Testing

During the QA phase of each Sprint, the QA analyst will retest each story again against such criteria as a form of Acceptance Testing. If the criteria is met successfully, the user story is deemed complete.

### Regression Testing

During the final week of the project, the full team will conduct a thorough regression testing exercise. The QA analyst will compile a list of user tests that consolidates all acceptance criteria from all features, among any further test required, to be used as a checklist during the final QA week.

Regression Testing checklists will be generated per platform/device when the project calls for such differentiation (e.g. a list for iOS and another for Android, when building mobile apps).

A project is not deemed complete, nor can it be released to market, until the full regression checklist has been passed.

### Handling Bugs

Bugs that are identified by the QA Analyst during the Milestone Testing or Regression Testing will be reported on as new cards on their respective Sprint boards, indicating the acceptance criteria that has failed to be met (within the bug’s Trello card) and any other information relevant to the bug.

Bugs will be attended to during the last 3 days of each sprint (post Code Lockdown and up until the next Sprint Planning session).

At the end of the project, the last QA week during which the Regression Testing occurs, developers will work together with QA analyst to resolve any pending bugs that arise.

### Accounting for QA time

The various processes of QA outlined above need to be accounted for during the Sprint Planning and Point Estimation process. Thus, when estimating user stories, time for the following tasks needs to be accounted for:

* Defining the acceptance criteria for each user story.
* Writing the unit tests/specs, and adding them to the broader project’s test suite/library (when required).
* Developer’s time required to test the developed solution against the acceptance criteria using test methods chosen.
* QA Analyst Milestone Testing (1 day for each Sprint, unless specified otherwise)
* Regression Testing for each project (1 week per project, unless specified otherwise).

This consideration is required to ensure that when project timelines are scoped out by the team, all QA processes have been accounted for so that at the end of the project’s proposed timeline, the solution has been thoroughly tested and ready to deploy.

## POINT ESTIMATION


The purpose of this document is to standardize our point-estimation process and guidelines that fit within the MADE context, and is to be accepted by all members of the development team.

### Why do we use points?

As proven time and time again, estimating timings for software development is a daunting, and often an inaccurate exercise. In place of that, we aim to estimate completion of tasks based on the effort level required rather than the time required to do so. This allows us to integrate some expectation in the midst of uncertainty, but in a way that is still more flexible than strict deadlines set prematurely.

### Point System

We’ll be making use of the Fibonacci sequence to estimate effort levels required for each task in the system, in which the next number is derived by adding together the previous two (e.g. 1, 2, 3, 5, 8, 13, 21, 34…)

### Our standard

To standardise it within the context of our capacity and capability, we are to equate the sequence to the following (the ‘estimated time required’ column is there to give context to our perception of points in a way others can understand):

Points = Estimated Time Required

* 1 = 2 hours - 4 hours (half day)
* 2 = 4 hours - 7 hours (half day to full day)
* 3 = 7 hours - 11 hours (1 to 1.5 days)
* 5 = 14 hours - 17 hours (2 - 2.5 days)
* 8 = 28 hours - 35 hours (4-5 days)
* 10 = 35 hours (5 days)

### Considerations

* The highest point allocation per task is 5. Any task deemed above that will be required to be broken up to more granular tasks weighted 5 or less points.

### Process

* Scrum master submits tasks to relevant Trello/Zen Hub sprint and/or maintenance boards.
* Scrum master to move task to ‘Sprint’ column, indicating it is within current sprint plan and requires estimation.
* Developer to familiarize themselves with the task (through own analysis and/or discussion with relevant team members).
* Developer to ESTIMATE points required on the card using ‘Scrum for Trello’.
* Developer to move card to ‘In Progress’ whilst working on it.
* Upon completion of task, developer to move card to QA, and add/comment CONSUMED points to the card to indicate the actual effort that was required for its completion. This can be lower or higher than initial estimation.

### Measurement and optimization

Over time, we will conduct the following (using relevant tools required):

* Measure velocity of task completion and consistency of such.
* Compare consumption of points to their initial estimations to note any evident patterns (e.g. constant habit of over or under estimating tasks).
* Revisit our own standards depicted in this documents in terms of our capacity of handling points (to see if we are able to handle more or less points per day/week, or update our equated effort level assigned to each point).

### Guidelines

If you assign 3 points on a story, find a 1-point story nearby and assess whether this story is really 3 times as complicated as the smaller story. This is called triangulation, and it is vital to ensuring consistency. Do this periodically throughout planning, particularly for stories that generate discussion and disagreement.
Try not estimate points pre-maturely; spend the necessary time required to understand the task and what you’ll need to do to complete it and then provide a reliable estimation for such. This is to improve planning for all stakeholders, as well as to reduce discrepancies between estimated points and consumed points.


## RETROSPECTIVE

At the end of every one of our projects, and each of its core cycles (Sprints), the respective project’s team will collectively meet for a Retrospective. The aim of the Retrospective is to review the most recent Sprint and provide a space and opportunity for its relevant team members to express their opinion about the Sprint and its respective expectations. The Retrospective is a safe environment that encourages discussion between all team members, but is primarily focused on those actively working on developing the project.

### Retrospective Process

We'll run our Retrospective sessions using a combination of a whiteboard or glass window, and every team member will be supplied with post-it notes and pens.

We'll follow the ‘Good, Bad, Better, Best’ exercise, and the board will be divided into these 4 sections:

Good - things that went well and satisfied preset expectations.
Bad - things that did not go well and were either not completed, or underwent great difficulty.
Better - things we can do better next time.
Best - things that went exceptionally well and worth praising.

Examples:

Good - “All code was merged without reducing quality of source files”
Bad - “Lost a full branch from the repo due to computer crashing and no backup available”
Better - “The authentication module can be refactored into simpler code”
Best - “Upgraded XCode and updated all relevant files in 3 hours instead of 9 weeks”

### Conduct:

At the beginning of the session, each team member will be given 10 minutes to write out feedback on the post-it notes (one piece of feedback per note).
A team member will come onto the board and place one ticket on the board in its relevant section, explaining the feedback to the group. Group then discusses such point.
Next person comes up and places another ticket on the board and discusses it.
Process continues until all tickets are on the board, one person and one ticket at a time.
Process ends when all points have been discussed.

### Retrospective Conditions:

The Retrospective will take place at the end of each Sprint, every 2nd Friday, immediately prior to the Sprint Planning for the project.
It will be facilitated by the Product Owner, and conducted in the office or in a separate room booked out for the session should the need arise.
The duration of the Retrospective will vary between 30 - 60 minutes, but must not exceed 60 minutes.
The onus is on the team members actively working on the project to gather data throughout the Sprint with the intention of sharing it with the rest of the team during the Retrospective.
Opinions shared during the Retrospective can be related to either the project itself, or the processes relevant to it.

### NB: The Product Owner will NOT summarize next steps or any actions. The Retrospective is intended to facilitate an environment for fellow team members to discuss and share their concerns, suggestions and praises. The information gathered and presented is passive to form basis during Sprints that follow, with the sole exception of feedback that requires specific action from Product Owner. The onus remains on the team members to learn from feedback, and incorporate it where deemed fit during Sprints that follow.
