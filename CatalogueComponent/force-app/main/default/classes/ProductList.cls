public class ProductList {
    @AuraEnabled(cacheable=true)
    public static String returnProducts(){
        List<Product2> productList = new List<Product2>();
        productList = [Select Id, Name,ProductCode From Product2];
        return JSON.serialize(productList);
    } 
}