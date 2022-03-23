public class ContactTriggerHelper {
    public class ValidationException extends Exception {}
    
    // public static boolean validateTiers( List<Contact> ctLst){
    //     integer i=0;
    //     for(Contact ct: ctLst){
            
    //         if(ct.From_Tier__c>ct.To_Tier__c){
    //             throw new ValidationException('\'From Tier\' Cannot be Greater than \'To Tier\' '); 
    //         }
    //         for(integer j=0; j<ctLst.size();j++){
    //             if(i!=j){
                    
    //                 System.debug('Inner Loop Started :'+j+' : ' + ctLst[j] + ' : '+ ctLst[j].From_Tier__c);
                    
    //                 if((ct.From_Tier__c>=ctLst[j].From_Tier__c && ct.From_Tier__c<=ctLst[j].To_Tier__c )||(ct.To_Tier__c>=ctLst[j].From_Tier__c && ct.To_Tier__c<=ctLst[j].To_Tier__c )){
    //                     throw new ValidationException('\'From Tier\' and \'To Tier\' overlaps with another contacts \'From Tier\' and \'To Tier\'. ');
    //                 }
    //             }
    //         }
    //         i++;
    //     }
    //     return true;
    // }
    
    
    public static boolean validateCOntacts(List<Contact> ctLst){
        SortUtil.sortRecords(ctLst, SortUtil.SortOrder.ASCENDING,'From_Tier__c',SortUtil.Type.TYPE_DECIMAL);
        Decimal i=0;
        for(Contact ct:ctLst){
            if(ct.From_Tier__c>=ct.To_Tier__c){
                return false;
            }
            if(ct.From_Tier__c<=i){
                return false;
            }
            i=ct.To_Tier__c;
        }
        return true;
    }
}