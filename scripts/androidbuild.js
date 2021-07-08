
const shell = require('shelljs')

shell.exec('android_build.sh', function(err){
    if(err){
      console.log((err));
      process.exit(0);
    } else {
        shell.echo("Build Success!!");
    }
  });
