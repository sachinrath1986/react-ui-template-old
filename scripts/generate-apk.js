const shell = require('shelljs')
shell.echo("Generating APK file!!")
//shell.exec('generate_apk.sh')
shell.exec('generate_apk.sh', function(err){
    if(err){
      console.log((err));
      process.exit(0);
    } else {
        shell.echo("Unsigned-Apk Generated Successfully! [PATH: ./android/app/build/outputs/apk/release]");
    }
  });

