({
    myAction : function(component, event, helper) {
        let cmp = event.getParam('arguments');
        console.log('Line 4 ', JSON.stringify(cmp));

        let action = component.get("c.saveData");

        action.setParams({'str':'saurabh'});

        action.setCallback(this,function(res){
            console.log('Line 10 ', res.getState());
            console.log('Line 11 ', res.getReturnValue());
        })

        $A.enqueueAction(action);
    }
})