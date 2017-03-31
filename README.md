Return Path Challenge Application
=====================================
An application used for dynamically organizing email senders

To run this application locally, clone this repository. In a terminal, change to this directory.
Then run `$serve -s build` in the command line.

Web Page
=====================================
[Return Path Challenge](https://return-path-challenge.herokuapp.com)

How To Use
=====================================
This application offers the ability to move different email senders to separate folders
for organization.

Email senders can then be filter by sender name, filtered by folder, and verified
for organization allowing for easy oversight the types of email received from each sender.

Header
=====================================
At the top of the of the email list table is the filter bar.  Since the purpose of this application to organize emails by sender, it is important that particular senders can be found quickly and that the contents of the different folders can viewed separately if necessary.

Header Drop Down
=====================================
On the left side of the header bar is a drop down menu that allows senders to be filtered by their current folder.  When a folder is chosen, the only senders in the chosen folder are displayed.

Header Search Bar
=====================================
The search bar provided on the header allows a user to filter senders.  As more text is entered into the search bar, the list displays only the senders that match the entered text.

Table
=====================================
The table consists of a list of senders and displays a checkbox that indicates whether or not the sender has been organized, the sender’s name, the sender’s domain, the sender’s email address, and the current folder in which the sender is organized.

Organize Checkbox
=====================================
The checkbox under the “Organize” header on each row is to represent whether that particular sender has been organized properly.  Therefore, when a checkbox is checked, the folder for that particular sender can not be  changed.  A sender she be unchecked before changing the corresponding folder.

Folders Drop Down
====================================
As stated above, when a sender’s “Organize” checkbox is unchecked, the corresponding folder can be changed using the “Folder” drop down. Next to this drop down is a border color that is representative the chosen folder.  When a new folder is chosen, this color automatically updates to match the chosen folders color.
