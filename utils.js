import {readFile} from "fs";
export const l=function(){
	return console.log(...arguments);
};
//readFileAsync异步读取文件
export const readFileAsync=path => new Promise((resolve,reject) =>{//参数为path，返回值为Promise实例化对象
	readFile(path,"utf-8",(err,file) =>{
		err && reject(err);
		resolve(file);
	});
});
//模板字符串
export const createHTML= async ({title,styles,scripts,path}) =>
	`<!DOCTYPE html>
		<html>
			<head>
				<meta charset="utf-8" />
				${styles.map(item => `<link rel="stylesheet" href="${item}" />`).join("\n\t\t")}
				<title>${title}</title>
			</head>
			<body>
				${await readFileAsync(path)}
				${scripts.map(item=> `<script src="${item}"></script>`).join("\n\t\t")}
			</body>
		</html>

	`;