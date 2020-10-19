var plan = require("flightplan");
var config = require("../config/config");

///////////////////////////
/// WWW.MACSXPERTS.COM ////
///////////////////////////
plan.target("macsxperts.com", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "macsxperts.com",
    git_repo: "git@github.com:AravinthPanch/macsxperts.com.git",
    git_branch: "master",
    git_src_dir: ""
  },
]);

////////////////////////////////////
/// WWW.HARDWARESTARTUPS.BERLIN ////
////////////////////////////////////
plan.target("hardwarestartups.berlin", [
  {
    host: config.host,
    username: config.username,
    privateKey: config.privateKey,
    agent: config.agent,

    domain_name: "hardwarestartups.berlin",
    git_repo: "git@github.com:AravinthPanch/hardwarestartups.berlin.git",
    git_branch: "master",
    git_src_dir: ""
  },
]);