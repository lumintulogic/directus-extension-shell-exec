import { execSync } from 'child_process';

export default {
	id: 'lumintulogic-shell-exec',
	handler: function ({directory,command,output}){
		const res = execSync(command,{
			cwd: (directory !== undefined ? directory : "./")
		}).toString();
		
		switch(output){
			case "JSON":
				return JSON.parse(res);
			case "plainText":
				return res;
			case "Text":	
				return res.replace(/\s/g,'');
		} 
	}
};
