public with sharing class WireController {
    @AuraEnabled(cacheable=true)

    public static List<Account> getAccounts() {
         
        List<Account> accList = [SELECT Id, Name, Phone FROM Account limit 10];
        return accList;

    }
}