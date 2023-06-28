import { NgModule } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { UserComponent } from "./users/user/user.component";
import { ServersComponent } from "./servers/servers.component";
import { ServerComponent } from "./servers/server/server.component";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes =[
  { path: '', component: HomeComponent},
  { path: 'users', component: UserComponent, children:[
    { path: 'users/:id/:name', component: UserComponent}
  ]},
  { path: 'servers', component: ServersComponent, children:[
    { path: ':id', component: ServerComponent},
    { path: ':id/edit', component: EditServerComponent}
  ]},
  {path: 'not-found', component:PageNotFoundComponent},
  {path: '**',redirectTo:'/not-found'}

];
@NgModule({
  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule{

}
