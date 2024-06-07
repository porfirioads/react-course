FROM node:20.12.1-buster-slim

SHELL ["/bin/bash", "-c"]

ENV TZ=America/Mexico_City

# -------------------------
# OS DEPENDENCIES
# -------------------------

RUN apt update && \
    apt install -y vim wget git

# -------------------------
# FOLDER PERMISSIONS
# -------------------------

WORKDIR /app

RUN mkdir -p /app && chown -R node:node /app

USER node

# -------------------------
# GIT CONFIGURATION
# -------------------------

# Load build args and set environment variables

ARG GIT_NAME \
    GIT_EMAIL \
    GIT_SSH_PRIVATE_KEY

ENV GIT_NAME=${GIT_NAME} \
    GIT_EMAIL=${GIT_EMAIL} \
    GIT_SSH_PRIVATE_KEY=${GIT_SSH_PRIVATE_KEY}

# Set basic git config

RUN git config --global user.name "${GIT_NAME}"

RUN git config --global user.email "${GIT_EMAIL}"

RUN git config --global core.fileMode false

# Configure git ssh key

RUN mkdir ~/.ssh && echo -e "${GIT_SSH_PRIVATE_KEY}" > ~/.ssh/id_rsa

RUN chmod 400 ~/.ssh/id_rsa

# Configure git completion

RUN wget -O ~/git-prompt.sh https://raw.githubusercontent.com/git/git/master/contrib/completion/git-prompt.sh

RUN wget -O ~/git-completion.bash https://raw.githubusercontent.com/git/git/master/contrib/completion/git-completion.bash

RUN echo "source ~/git-completion.bash" >> ~/.bashrc

RUN echo "source ~/git-prompt.sh" >> ~/.bashrc

# Configure bash PS1 to show gir repo state

RUN echo "export GIT_PS1_SHOWDIRTYSTATE=1" >> ~/.bashrc

RUN echo "export PS1='\\[\$(tput bold)\\]\\[\\033[32m\\]\\u@api:\\[\\033[34m\\]\\w\\[\\033[31m\\]\`__git_ps1\`\\[\$(tput sgr0)\\]\\[\\033[97m\\] $ '" >> ~/.bashrc

# -------------------------
# REACT APP CONFIGURATION
# -------------------------
