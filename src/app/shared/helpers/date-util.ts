export class DateUtil {
 static convertToUtcString(dateString: string): string {
   const date = new Date(dateString);
   return date.toISOString();
 }
}
