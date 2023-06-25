#!/bin/bash

# setup passwordless ssh
# ----------------------------------------
# ssh root@DROPLET_IP
# sudo vi /etc/ssh/sshd_config
# change PasswordAuthentication from no to yes
# sudo systemctl restart ssh

# create "deployer" user
# adduser deployer
# usermod -aG sudo deployer
# su deployer

ssh-keygen
ssh-keyscan -t rsa github.com >> ~/.ssh/known_hosts
cat ~/.ssh/id_rsa.pub
echo "Copy the ssh pub key to your Github account ssh key setting!"

cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys2  # ???
chmod 700 ~/.ssh/authorized_keys && chmod 640 ~/.ssh/authorized_keys2

echo "Create HOST, USERNAME, and KEY variable in your project setting (Secrets and Variables)."
echo "Finish!"

