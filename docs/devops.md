# DEVOPS

## SECURITY

Firewalling on any server will be done with CSF (ConfigServer Firewall), a Stateful Packet Inspection (SPI) firewall, Login/Intrusion Detection and Security application for Linux servers. This allows blanket coverage over most elements of the server which may have been neglected if using a more manual approach.

- Close all ports that do not need to be open
- Temporary/permanent bans on failed logins via SSH
- Disable all email sending functionality (this is done through services such as Mailgun)
- Implement country wide bans for high risk countries (CN, RU, UZ) that _do not_ need to access the product.
- Restrict SSH to key-access only.
- There is no FTP.
- Prevent excessive connections to the server
- Monitor suspicious user processes
- Prevent port scanning
- the list goes on....

We also make use of CloudFlare to mitigate DDoS and to take advantage of their WAF (Web Application Firewall). This is a new introduction and doesn't necessarily apply to previous projects, however, moving forward it is a requirement on all suitable projects.

## CONTINUOUS INTEGRATION

Deployments need to be automated and repeatable and as free from potential human error as possible.

We make use of CircleCI as our CI platform due to its simplicity and its reliability, as well as its close integrations with services such as GitHub and it provides a comprehensive API to keep things automated.

**Our CI workflow is as follows:**

*Code (develop branch) -> Github -> CircleCI -> Development Server*

*Code (master branch) -> Github -> CircleCI -> Live Server*

Branches are merged from develop to master to perform production deployments.

For more information on the branching strategy mentioned above, please see the **“GIT WORKFLOW”** topic in the **CODE** section below.

A few principles we follow as outlined by Martin Fowler:

- Automate the build
- Make your build self-testing
- Every commit should build on an integration machine
- Keep the build fast
- Test in a clone of the production environment
- Everyone can see what’s happening
- Automate deployment

*A DevOps Cautionary Tale: http://dougseven.com/2014/04/17/knightmare-a-devops-cautionary-tale/ *

## BACKUPS

**Servers**

All production servers are backed up locally and remotely. There are several local backups and one remote backup performed per day. The remote backups are stored on Amazon S3.

- On baremetal servers, the backups are not machine snapshots. They are code & database backups.
- On cloud instances, we will do machine snapshops throughout the day.

## DOMAIN NAMES & DNS

We register our domains with two providers.

**Local domains:** ZADomains.net

**International domains:** Name.com

All DNS is managed on Google Cloud DNS.

We use WhatsMyDNS.net to check propagation across the world and we check availability of domains with who.is.

## HOSTING & SERVERS

Our bare metal servers are hosted at Hetzner. We use Hetzner because they are the most advanced and reliable hosting company in South Africa, in our opinion.

Our cloud providers vary depending on their use case. We typically use Amazon EC2, Google Compute or DigitalOcean to provision cloud servers.

While we don't generally make use of PaaS providers like Heroku at this point in time, we are looking to deploy smaller scale and internal apps to it in future.

## SECURITY & SSL

We use LetsEncrypt for SSL certificates for development and day to day usage. When it comes to a more secure and production environment we will go with something more like a EV SSL certificate from DigiCert.

We make use of CloudFlare to filter attacks (Cross-site scripting, Injection, etc) via their WAF.

## CDN (Content Delivery Network)

We again make use of CloudFlare for CDN purposes due to the combination of security as well as content delivery. As a new addition this may not be the case on previous projects, however it is a mandatory on all suitable projects moving forward.

When using AWS to provision a service, we make use of CloudFront wherever possible.

## MONITORING

We make use of NewRelic for both server and application performance monitoring and it notifies us of any issues in the #new-relic-reports channel on Slack.

Exception monitoring on our applications is tracked by HoneyBadger and is reported to the #exception-notices channel on Slack or to a more specific client/project specific exception channel.

We monitor uptime of all the properties we manage using StatusCake and it reports directly into the #uptime-monitoring channel on Slack.

## STORAGE

We use Amazon S3 as our storage system for both large files and in cases where there may be alot of files.

We also use it to upload certain types of 'downloadable' content to to keep traffic spikes away from the production environment. However, as everyone except Basecamp knows, if you are hosting;

1. Regularly downloaded file(s).
2. File(s) that need to be accessed quickly.

then they should be served with AWS CloudFront distribution enabled on Amazon S3 bucket as Amazon S3 serving downloads is extremely slow.

## PAYMENT GATEWAYS

**One Time**

Due to the limitations in South Africa we unfortunately can’t use Stripe for all our projects, and when this is the case we turn to PayFast. For international projects where possible we make use of Stripe.

PayFast charges a 3.9%(+R2.00) fee per transaction without any setup or monthly fees. Stripe charges a 1.4%(+20p) fee per transaction without any setup or monthly fees. These do change occasionally, so keep an eye on the respective provider website for updated rates.

**Recurring**

When we need to enable subscription or recurring billing we make use of Recurly as it’s a leader in its field and has support for South African Rands.

*PayFast has recently included a subscription model in their offering, so this will be explored as a option for local merchants.*

## TRANSACTIONAL EMAIL

Our transactional email is currently split between two platforms. SendGrid and MailGun.

Moving forward we will only make use of MailGun as it is a superior product and has a much faster mail delivery time as well as reporting. 

If you need to setup transactional mail sending, the username/password for the account is on 1Password.
