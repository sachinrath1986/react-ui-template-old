
const shell = require('shelljs')

console.log(shell.pwd());

shell.echo("Building android app...");

shell.exec(`${shell.pwd()}/scripts/build-android.sh`, function(err){
    if(err){
      console.log((err));
      process.exit(0);
    } else {
        shell.echo("Build Success!!");
    }
  });
