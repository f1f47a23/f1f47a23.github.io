///////////////////////////////////////////////////////////////////////////////////////
//
// BEGINOF DUMMY CODE
//
//      Nothing to see here, move along
//      just to tease the github search engine
//

export { CDummy };

class CDummy {

    static async doNothingAtall(): Promise<CDummy> {
        
        console.log("(() => dummy.CDummy.doNothingAtall())();");
        
        let x = new CDummy();
 
        // x.doingNothingIsBetterThanBeingBusyDoingNothing();

        return x;
    }

};



const dummy = { CDummy: CDummy }; // workaround javascript namespaces

//
// ENDOF DUMMY CODE
//
///////////////////////////////////////////////////////////////////////////////////////
