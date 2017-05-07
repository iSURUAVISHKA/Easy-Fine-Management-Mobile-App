
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'page-home',
  templateUrl: 'add-user.html'
})
export class AddUser {

books: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, angFire: AngularFire) {
	this.books = angFire.database.list('/Users');
  }

   addmem():void{
	   let prompt = this.alertCtrl.create({
		   title: 'Add new member',
		   message: 'Pease add member details',
		   inputs: [
		   {
			   name: 'member_ID',
			   placeholder: "Add Member ID"
		   },
		   {
			   name: 'password1',
			   placeholder: "Add Password"
		   }
		   ],
		   buttons: [
		   {
			   
			   text: "Cancel",
			   handler: data =>{
			   console.log("Cancle clicked");
			   }
			   
		   },{
			   
			   text: "Add Member",
			   handler: data =>{
			   this.books.push({
				   
				   title: data.member_ID,
				   author: data.password1
			   })
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }
   
   
    editmem(book):void{
	   let prompt = this.alertCtrl.create({
		   title: 'Edi member details',
		   message: 'Pease do the changers',
		   inputs: [
		   {
			   name: 'title',
			   placeholder: book.title
		   },
		   {
			   name: 'author',
			   placeholder: book.author
		   }
		   ],
		   buttons: [
		   {
			   
			   text: "Cancel",
			   handler: data =>{
			   console.log("Cancle clicked");
			   }
			   
		   },{
			   
			   text: "Edit Details",
			   handler: data =>{
				   let newTitle:String = book.title;
				   let newAuthor:String = book.author;
				   
				   if(data.title != ''){
					newTitle = data.title;
				   }
				   
				    if(data.author != ''){
					newAuthor = data.author;
				   }
			   this.books.update(book.$key,{
				   
				   title: newTitle,
				   author: newAuthor
			   })
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }
   
   delmem(bookID):void{
	   let prompt = this.alertCtrl.create({
		   title: 'Delete Member',
		   
		   buttons: [
		   {
			   
			   text: "Cancel",
			   handler: data =>{
			   console.log("Cancle clicked");
			   }
			   
		   },{
			   
			   text: "Delete Officer",
			   handler: data =>{
				   
			   this.books.remove(bookID);
			   }
			   
		   }
			]
	   });
	   prompt.present();
   }
}
