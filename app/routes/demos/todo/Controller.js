import { Controller, History, Url } from 'cx/ui';
import {Toast} from 'cx/widgets';
import toastconfig from "./toastconfig";

export default class extends Controller {
    init() {
        super.init();
        var items = this.store.get('$page.todos');
        // Reset the list to default data if it's empty
        if (!items || !items.length) {
            items = [{
                id: 1,
                text: 'Get Cx boilerplate app',
                done: true
            }, {
                id: 2,
                text: 'Learn Cx'
            }, {
                id: 3,
                text: 'Choose a CSS class prefix'
            }, {
                id: 4,
                text: 'Tweak the layout if needed'
            }, {
                id: 5,
                text: 'Create an application'
            }];
            this.store.set('$page.todos', items);
        }
    }

    onAdd() {

        var items = this.store.get("$page.todos");
        for(var i in items){
<<<<<<< HEAD
            if(this.store.get('$page.text').trim().toLowerCase() === items[i].text.trim().toLowerCase()){
=======
            if(this.store.get('$page.text').toLowerCase() === items[i].text.toLowerCase()){
>>>>>>> 71cbbe86456f5947d7ea4da3815d3c4de2c8e3bd
                Toast.create(toastconfig.errorToast("Todo already exists!")).open();
                return;
            }
        }
                var id = items.reduce((acc, item) => Math.max(acc, item.id), 0) + 1;
                items = items.concat({
                    id: id,
                    text: this.store.get('$page.text') || `Untitled (${id})`,
                    done: false      
        });
        this.store.set('$page.todos', items);
        this.store.set('$page.text', null);
        Toast.create(toastconfig.successToast("Added new Todo")).open();
        

         
    }


    onRemove(e, {store}) {
        e.preventDefault();
        var id = store.get('$record.id');
        var items = this.store.get('$page.todos');
        this.store.set('$page.todos', items.filter(item => item.id !== id));
    }
}
