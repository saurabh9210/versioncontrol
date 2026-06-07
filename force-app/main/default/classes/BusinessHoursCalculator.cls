public class BusinessHoursCalculator {
    //add
    public class Request {
        @InvocableVariable
        public String caseRecId;
    }

    @InvocableMethod(
        label='Extract 5 or 10 Digit Account Number from Email Subject'
        Description='Returns first 5 or 10 digit number found in the subject'
    )
    public static void calculateBusinessHours(List<Request> requests) {
        System.debug('Line 16 '+ requests.size());
        for (Request req : requests) {
            System.debug('Line 12 '+ req.caseRecId);
        }
    }
}