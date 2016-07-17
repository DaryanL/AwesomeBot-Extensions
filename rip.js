/*
	Name: RIPme.xyz
	Type: command
	Key: rip
	Usage: [<username>]
	Extended help: Posts a link to ripme.xyz for a user
*/

var usr = svr.userSearch(message.suffix);
if(!message.suffix || !usr) {
	usr = message.author;
}
ch.sendMessage("http://ripme.xyz/" + usr.username);