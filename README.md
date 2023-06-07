# cloud-server

"The Cloud" is a fundamental component of internet applications, encompassing distributed data, servers, games, and web/data hosting services. This repository aims to explore how the cloud works and how we can leverage its capabilities.

## Checklist for Completing the Lab: AWS: Cloud Servers Assignment:

- [ ] Familiarize yourself with AWS billing and account management:
  - [ ] Review the Account/Billing pages on AWS.
  - [ ] Set up a cost alert to monitor expenses.
  - [ ] Learn how to turn off any services you create or use.

- [ ] Understand the concept of "The Cloud":
  - [ ] Research and define the concept of "The Cloud" and its significance in internet applications.

- [ ] Learn about containers and their role in cloud computing:
  - [ ] Define containers and their purpose in cloud computing.

- [ ] Gain knowledge about virtual server "instances" in AWS:
  - [ ] Explore the concept of virtual server "instances" and their importance in AWS.

- [ ] Study CDNs and scaling horizontally:
  - [ ] Understand the role of Content Delivery Networks (CDNs) in cloud infrastructure.
  - [ ] Learn about horizontal scaling and its benefits in cloud environments.

- [ ] Deploy a Node.js server to an EC2 instance using Elastic Beanstalk:
  - [ ] Choose the method of creating an application with Elastic Beanstalk that suits your needs:
    - [ ] If using the Elastic Beanstalk GUI:
      - [ ] Select NodeJS as the platform.
      - [ ] Prepare a .zip file of your application source code (excluding `node_modules` and `package-lock.json`).
      - [ ] Create the application and upload the source code via the GUI.
    - [ ] If using the command line:
      - [ ] Install AWS CLI and aws eb command line utilities.
      - [ ] Run `eb init` to initialize your folder as an Elastic Beanstalk application.
      - [ ] Provide the necessary information, such as region and Node.js version.
      - [ ] Run `eb create my-environment-name` to create the environment for your app.
      - [ ] Use `eb deploy` to deploy your application to the environment whenever you make code changes.
  - [ ] Familiarize yourself with other useful `eb` commands for managing your apps.
  - [ ] Check in your server code to GitHub.

- [ ] Explore auto-deployment options using GitHub Actions:
  - [ ] Browse the GitHub Marketplace for actions that can automate the deployment of your source code to Elastic Beanstalk whenever you commit changes.

- [ ] Document your processes:
  - [ ] Update your README.md file with the required documentation, including the links to both deployed servers (GUI deploy and CLI deploy).

- [ ] Stretch Goal: Automatically deploy your app on check-ins to the main branch using a GitHub Action:
  - [ ] Explore the GitHub Marketplace for appropriate actions.
  - [ ] Set up the GitHub Action to automatically deploy your application to either or both environments.

- [ ] Submission:
  - [ ] Create a new repository for your server called 'cloud-server'.
  - [ ] Work on a non-main branch and make commits appropriately.
  - [ ] Create a pull request to your master branch with your work for this lab.
  - [ ] Submit the link to that pull request on Canvas.

Note: This checklist incorporates the additional requirements and tasks provided in the second description of the assignment. Make sure to refer back to the original assignment for any specific details or instructions provided by your instructor.
