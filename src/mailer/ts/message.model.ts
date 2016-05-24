export class Message {

    public Id: number = -1;

    public Sent: boolean = false;

    public Subject: string = "";

    public Body: string = "";

    public DateSent: Date = new Date();

    public History: string[] = [];
}