export interface IProject {
    name: String;
    description: String;
    // type: "frontend" | "backend" | "script";
    type: String;
    repo: String;
    // access: "Public" | "Private" | "Proprietary";
    access: String;
    url: String;
    stack: String[];
}