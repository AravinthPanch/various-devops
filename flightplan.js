/**
 * Description:   Automatic creation and deployment of websites on araCloud
 * Author:        Aravinth Panch
 */

// includes
var plan = require('flightplan');
require('./create-server.js');
require('./create-website.js');
require('./deploy-website.js');


// server
plan.target('araCloud', {
  host: '138.197.186.147',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  webhook_dir: '/var/www/webhook/',
  supervisor_dir: '/etc/supervisor/conf.d/',
  apache2_conf_dir: '/etc/apache2/sites-available/'
});

// websites
plan.target('aracreate.com', [{
    host: 'aracreate.com',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'aracreate.com',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
    git_branch: 'master',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  }, {
    host: 'dev.aracreate.com',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'dev.aracreate.com',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
    git_branch: 'dev',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  },
  {
    host: 'test.aracreate.com',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'test.aracreate.com',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aracreate.com.git',
    git_branch: 'dev',
    git_src_dir: 'test/',
    webhook_dir: '/var/www/webhook/',
  }
]);

plan.target('aravinth.info', [{
    host: 'aravinth.info',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'aravinth.info',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aravinth.info.git',
    git_branch: 'master',
    git_src_dir: '2015/',
    webhook_dir: '/var/www/webhook/',
  },
  {
    host: 'timeline.aravinth.info',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'timeline.aravinth.info',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aravinth.info.git',
    git_branch: 'master',
    git_src_dir: '2018/timeline/',
    webhook_dir: '/var/www/webhook/',
  },
  {
    host: 'arabot.aravinth.info',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'arabot.aravinth.info',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/aravinth.info.git',
    git_branch: 'master',
    git_src_dir: '2018/arabot/',
    webhook_dir: '/var/www/webhook/',
  }
]);

plan.target('dreamspace.academy', [{
  host: 'dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'dev.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'dev.dreamspace.academy',
  port_number: 80,
  git_repo: 'git@github.com:dreamspace-academy/dreamspace.academy.git',
  git_branch: 'dev',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'kishoth.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'kishoth.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/nkishoth/kishoth.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'grashiyan.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'grashiyan.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/grashigrashiyan/grashiyan.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'thanooch.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'thanooch.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/Thanooch/thanooch.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'jayanthan.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'jayanthan.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/JayanthanX97/jayanthan.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'prashath.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'prashath.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/Prashath-31/prashath.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'ram.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'ram.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/kesavaram96/ram.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'thanushkar.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'thanushkar.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/Thanushkar/thanushkar.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'thinushan.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'thinushan.dreamspace.academy'',
  port_number: 80,
  git_repo: 'https://github.com/Thinushan/thinushan.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'dhanesh.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'dhanesh.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/Dhaneshkanth/dhanesh.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'amri.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'amri.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/AngelAmrutha/amri.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}, {
  host: 'viththi.dreamspace.academy',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'viththi.dreamspace.academy',
  port_number: 80,
  git_repo: 'https://github.com/Viththiyakaran/viththi.dreamspace.academy.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);

plan.target('macsxperts.com', [{
  host: 'macsxperts.com',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'macsxperts.com',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/macsxperts.com.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);

plan.target('hardwarestartups.berlin', [{
  host: 'hardwarestartups.berlin',
  username: 'root',
  privateKey: '/Users/aravinth/.ssh/id_rsa',
  agent: process.env.SSH_AUTH_SOCK,

  domain_name: 'hardwarestartups.berlin',
  port_number: 80,
  git_repo: 'git@github.com:AravinthPanch/hardwarestartups.berlin.git',
  git_branch: 'master',
  git_src_dir: '',
  webhook_dir: '/var/www/webhook/',
}]);

plan.target('watergenics.tech', [{
    host: 'dev.watergenics.tech',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'dev.watergenics.tech',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/watergenics.tech.git',
    git_branch: 'dev',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  },
  {
    host: 'watergenics.tech',
    username: 'root',
    privateKey: '/Users/aravinth/.ssh/id_rsa',
    agent: process.env.SSH_AUTH_SOCK,

    domain_name: 'watergenics.tech',
    port_number: 80,
    git_repo: 'git@github.com:AravinthPanch/watergenics.tech.git',
    git_branch: 'master',
    git_src_dir: '',
    webhook_dir: '/var/www/webhook/',
  }
]);
