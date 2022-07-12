

export class loginClass {
    checkEmail(email: string): boolean {
        let isValid = true;
        let isQuoted = false;
        let special = false;
        let at = [];
        let quotation = [];
    
        for (let index = 0; index < email.length; index++) {
          if (email[index] === "@") {
            at.push(index);
          }
    
          if (email[index] === '"') {
            quotation.push(index);
          }
        }
        for (let i = 0; i < at[at.length - 1]; i++) {
          if (
            email[i] === "[" ||
            email[i] === "]" ||
            email[i] === '"' ||
            email[i] === "," ||
            email[i] === ":" ||
            email[i] === ";" ||
            email[i] === "<" ||
            email[i] === ">" ||
            email[i] === "(" ||
            email[i] === ")" ||
            email[i] === "\\" ||
            email[i] === " "
          ) {
            special = true;
          }
        }
        for (let i = at[at.length - 1]; i < email.length; i++) {
          if (email[i] === "_") isValid = false;
        }
    
        if (
          quotation[0] === 0 &&
          at[at.length - 1] - 1 === quotation[quotation.length - 1]
        ) {
          isQuoted = true;
        }
    
        if (at.length !== 1 && !isQuoted) {
          isValid = false;
        }
        if (special && !isQuoted) isValid = false;
        if (at[at.length - 1] >= 63) isValid = false;

        console.log("email is not valid please check again");
        
        return isValid;
    }
    checkEnglish(pass: string): boolean {
        for (const i of pass) {
          if (!/[a-zA-Z]|[0-9]|[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(i)) {
            return false;
          }
        }
        return true;
    }

    checkPass(password: string): boolean {
        let format = /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/;

        if (password.length >= 8) {
          //check if there is at lest on capital letter
          if (/[A-Z]/.test(password)) {
            if (/[a-z]/.test(password)) {
              if (format.test(password)) {
                if (/[0-9]/.test(password)) {
                  if (this.checkEnglish(password)) {
                   return true;
                  } else console.log ("The password must english characters .");
                } else console.log ("The password must contain at least one numbers in row .");
              } else console.log ("The password must contain special character at least one.");
            } else console.log ("The password must contain lower letter at least one.");
          } else console.log ("The password must contain capital letter at least one.");
        } else console.log ("The password must be minimum 8 letters");
    
        return false;
        
    }
    checUser(checkemail: boolean,checkpass:boolean): boolean {
        if(checkemail===true && checkpass===true)
        {
            console.log(checkemail+" "+checkpass);
            return true;
        }
                return false;
        
    }

}



