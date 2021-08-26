const shell = require('shelljs');

console.log(shell.pwd());

shell.echo("Building APK for app...");

shell.exec(`${shell.pwd()}/scripts/build-apk.sh`, err => {
    if (err) {
        console.log((err));
        process.exit(0);
    } else {
        shell.echo("Unsigned-Apk Generated Successfully! [PATH: ./android/app/build/outputs/apk/release]");
    }
});

