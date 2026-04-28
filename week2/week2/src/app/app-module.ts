import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerComponent } from './server/server.component';
import { App } from './app';
import { Servers } from './servers/servers';
import { WarningAlert } from './warning-alert/warning-alert';
import { SuccessAlert } from './success-alert/success-alert';

@NgModule({
  declarations: [App, Servers, WarningAlert, SuccessAlert],
  imports: [BrowserModule, ServerComponent],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
