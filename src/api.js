import { exec } from 'child_process';

function run(command, options, output) {
  	return new Promise((resolve, reject) => {
		
		exec(command,options,(err,stdout)=>{
			if (err) {
				return reject(err);
			}
			
			switch(output){
				case "JSON":
					resolve(JSON.parse(stdout.toString()));
				case "plainText":
					resolve(stdout.toString());
				case "Text":	
					resolve(stdout.toString().replace(/\s/g,''));
			} 

		});

	});
};

export default {
	id: 'lumintulogic-shell-exec',
	handler: async function ({directory,command,output}){
		try{
			return await run(command,{
				cwd: (directory !== undefined ? directory : "./")
			},output);
		} catch (err){
			throw new Error(err);
		}
	}
};
