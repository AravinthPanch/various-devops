/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

var plan = require("flightplan");

// definitions
var webhook_dir = "/var/www/webhook/";
var remote_app_root = undefined;
var remote_app_dir = undefined;


// Set up an app in the cloud
plan.remote("create-app", function (remote) {
  remote.hostname();

  // definitions
  var $ = remote.runtime;
  remote_app_root = "/var/www/apps.aravinth.info/" + $.app_name +"/";
  remote_app_dir = remote_app_root + "app/";
  remote_app_secrets_dir = remote_app_dir + "secrets/";
  remote_app_repo_dir = remote_app_root + "repo/";

  //Create app folder with necessary folders
  remote.rm("-rf " + remote_app_root);
  remote.mkdir("-p " + remote_app_dir);
  remote.mkdir("-p " + remote_app_secrets_dir);
  remote.git(
    "clone -b " + $.git_branch + " " + $.git_repo + " " + remote_app_repo_dir
  );
  //setup submodules, if any
  remote.with("cd " + remote_app_repo_dir, function () {
    remote.git("submodule update --init");
  });
  remote.cp("-r " + remote_app_repo_dir + $.git_src_dir + "* " + remote_app_dir);
});

// Transfer necessary files from local to remote
plan.local("create-app", function (local) {
  local.hostname();

  // definitions
  var $ = local._context.hosts[0];
  local.with ("cd " + $.local_src_dir, () => {
    local.transfer($.local_secrets_dir, remote_app_dir);
  });

  //  Update flightplan deployment scripts
  local.transfer('./', webhook_dir);

});
