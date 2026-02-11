public class dsa{
    public static void main(String args[]){
        String str="abcd";
        String str2= "";
        int i=str.length()-1;
        do{
            str2=str2+str.charAt(i);
            i--;
        }
        while(i>=0);
        System.out.println(str2);
    }
}