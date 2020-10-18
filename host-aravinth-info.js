//////////////////////////
/// WWW.ARAVINTH.INFO //
//////////////////////////

var plan = require("flightplan");

plan.target("aravinth.info", [
  {
    host: "aravinth.info",
    username: "root",
    privateKey: "/Users/aravinth/.ssh/id_rsa",
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: "aravinth.info",
    port_number: 80,
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/index/",
    webhook_dir: "/var/www/webhook/"
  }, {
    host: "aravinth.info",
    username: "root",
    privateKey: "/Users/aravinth/.ssh/id_rsa",
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: "timeline.aravinth.info",
    port_number: 80,
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/timeline/",
    webhook_dir: "/var/www/webhook/"
  }, {
    host: "aravinth.info",
    username: "root",
    privateKey: "/Users/aravinth/.ssh/id_rsa",
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: "arabot.aravinth.info",
    port_number: 80,
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/arabot/",
    webhook_dir: "/var/www/webhook/"
  }, {
    host: "aravinth.info",
    username: "root",
    privateKey: "/Users/aravinth/.ssh/id_rsa",
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: "meet.aravinth.info",
    port_number: 80,
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/meet/",
    webhook_dir: "/var/www/webhook/"
  }, {
    host: "aravinth.info",
    username: "root",
    privateKey: "/Users/aravinth/.ssh/id_rsa",
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: "projects.aravinth.info",
    port_number: 80,
    git_repo: "git@github.com:AravinthPanch/aravinth.info.git",
    git_branch: "master",
    git_src_dir: "src/projects/",
    webhook_dir: "/var/www/webhook/"
  }
]);

plan.target("files.aravinth.info", {
  host: "aravinth.info",
  username: "root",
  privateKey: "/Users/aravinth/.ssh/id_rsa",
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: "files.aravinth.info",
  port_number: 80,
  git_repo: "git@github.com:AravinthPanch/files.aravinth.info.git",
  git_branch: "master",
  git_src_dir: "",
  webhook_dir: "/var/www/webhook/"
});

plan.target("cal.aravinth.info", {
  host: "aravinth.info",
  username: "root",
  privateKey: "/Users/aravinth/.ssh/id_rsa",
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: "cal.aravinth.info",
  port_number: 80,
  redirect_url: "https://calendly.com/ara-panch"
});

plan.target("talents.aravinth.info", {
  host: "aravinth.info",
  username: "root",
  privateKey: "/Users/aravinth/.ssh/id_rsa",
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: "talents.aravinth.info",
  port_number: 80,
  git_repo: "git@github.com:AravinthPanch/talents.aravinth.info.git",
  git_branch: "master",
  git_src_dir: "",
  webhook_dir: "/var/www/webhook/"
});

// APPS
plan.target("arametrics-clockify-google", {
  host: "aravinth.info",
  username: "root",
  privateKey: "/Users/aravinth/.ssh/id_rsa",
  agent: process.env.SSH_AUTH_SOCK,

  app_name: "arametrics-clockify-google",
  git_repo: "git@github.com:AravinthPanch/araMetrics.git",
  git_branch: "master",
  git_src_dir: "arametrics-clockify-google/",
  local_src_dir: "/Users/aravinth/local-workspace/araMetrics/arametrics-clockify-google/",
  local_secrets_dir: "secrets/"
});
