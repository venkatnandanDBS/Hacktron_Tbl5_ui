import { Injectable } from '@angular/core';
import { NotificationsService, NotificationType } from 'angular2-notifications';

@Injectable()
export class NotificationBuilderService {
  constructor(private _notifications: NotificationsService) { }
  createAlert() {
    this._notifications.create('Alert', 'Server might be down', NotificationType.Warn
      , {
        timeOut: 5000, showProgressBar: false, pauseOnHover:
          true, clickToClose: true, animate: 'fromRight'
      });
  }
  createDataSaveFailed(code, message) {
    this._notifications.create('Failed to add queue info', message, NotificationType.Warn
      , {
        timeOut: 3000, showProgressBar: false, pauseOnHover:
          true, clickToClose: true, animate: 'fromRight'
      });
  }
  createDataSaveSuccessful() {
    this._notifications.create('Data saved', 'Queue info added to database', NotificationType.Info
      , {
        timeOut: 3000, showProgressBar: false, pauseOnHover:
          true, clickToClose: true, animate: 'fromRight'
      });
  }
  createDataFetchFailed(code, message) {
    this._notifications.create('Unable to retrieve data', message, NotificationType.Error
      , {
        timeOut: 3000, showProgressBar: false, pauseOnHover:
          true, clickToClose: true, animate: 'fromRight'
      });
  }
  createDataFetchSuccessful() {
    this._notifications.create('Data received', 'Queue data received from server', NotificationType.Info
      , {
        timeOut: 3000, showProgressBar: false, pauseOnHover:
          true, clickToClose: true, animate: 'fromRight'
      });
  }

}
