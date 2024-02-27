# NITCONF Conference Website

## Introduction

Welcome to the documentation for the NITCONF Conference Website! This document outlines the software requirements and API endpoints for the website, focusing on speaker login, project submission functionalities, paper management, and version history.

## Overall Description

### Product Perspective
The NITCONF website enhances the conference management process by providing features for speakers to submit research papers, view their status, and manage multiple iterations of submitted papers efficiently.

### Product Functions
- User login using Google authentication.
- Abstract submission for research papers (up to 3 submissions).
- View status of submitted papers.
- Edit and view speaker details.
- Version history functionality for managing multiple iterations of submitted papers and associated comments.

![FLOWCHART](https://github.com/mikasajaeger19/SE_LAB_Team8_NITCONF/blob/main/docs/flow_chart.png?raw=true)


## External Interface Requirements

### User Interface
- Web-based application with login screens.
- Dashboard for submission status.
- Facility to upload research papers.
- Deadline notification.

### Software Interfaces
- Interfaces with a relational database.
- Utilizes Spring Boot with REST APIs for CRUD functionality.

### Communications Interfaces
- Email notifications for registration and paper submission.
- Web browser communications for paper submission.

## System Features

### Authentication
- **Endpoint:** `/login`
- **Description:** Authenticate and log in a user using Google authentication.

### Dashboard
- **Endpoint:** `/demo/user/{id}`
- **Description:** Retrieve details of a user specified by its ID.

### Paper Management
- **Endpoint:** `/paper/add`
- **Description:** Add a new paper to the system.
- **Endpoint:** `/paper/update/{paperId}`
- **Description:** Update details of a paper specified by its ID.
- **Endpoint:** `/paper/{paperId}`
- **Description:** Retrieve details of a paper specified by its ID.
- **Endpoint:** `/paper/author/{id}`
- **Description:** Retrieve details of a paper specified by its author's ID.
- **Endpoint:** `/paper/all`
- **Description:** Retrieve details of all papers.
- **Endpoint:** `/paper/`
- **Description:** Retrieve details of papers associated with the current user.

### User Management
- **Endpoint:** `/demo/add`
- **Description:** Add a new user to the system.
- **Endpoint:** `/demo/update`
- **Description:** Update details of a user.
- **Endpoint:** `/demo/all`
- **Description:** Retrieve details of all users.

### Comments Management
- **Endpoint:** `/comments/add/{versionId}`
- **Description:** Add a new comment to a specific version.
- **Endpoint:** `/comments/version/{versionId}`
- **Description:** Retrieve comments for a specific version.
- **Endpoint:** `/comments/paper/{paperId}`
- **Description:** Retrieve comments for a specific paper.
- **Endpoint:** `/comments/all`
- **Description:** Retrieve details of all comments.

## Other Nonfunctional Requirements

### Performance Requirements
- Ensure optimal response time, concurrent user handling, and scalability.
- Monitor database and network performance.
- Ensure reliability and uptime.

### Safety and Security Requirements
- Ensure data security through a dedicated database.
- Implement version control system for code management.

This documentation provides an overview of the NITCONF Conference Website, its features, and API endpoints. For more detailed information, refer to the specific sections and endpoints mentioned above.
