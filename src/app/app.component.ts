import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(){
  function doAsyncTask() {
  var promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    console.log("Async Work Complete");
    resolve();
    }, 100);

  });
  return promise;
}
doAsyncTask().then(
  (ssd) => {

    console.log("Task Complete!")
  },
  () => console.log("Task Errored!"),
);



  }
}
