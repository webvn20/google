// JavaScript Document
// //////////////////////////////////////////////////////
// Code javascript danh ngon ngau nhien for Blogspot code by www.atsuu.com
	var color_author="RED"; // mau chu tac gia
	var color_text="#000000"; // mau chu danh ngon 
	var size_author="2"; // kich thuoc font chu tac gia
	var size_text="3";  // kich thuoc font danh ngon
	var texts = {
	"Lêônađơ Vanhxi":"Sắt không dùng đến sẽ gỉ, nước không chảy sẽ thối hoặc đóng băng. Còn trí tuệ con người nếu không dùng đến sẽ thui chột đi.",
	"(Lơrua)":"Một lạng khoe khoang, tiêu tan cả tấn danh vọng",
	"Tục ngữ Ý":"Khôn ngoan đến với sự lắng nghe, hối hận đến với sự ba hoa",
	"Abutaliv":"Nếu anh bắn vào quá khứ bằng súng lục thì tương lai sẽ bắn vào anh bằng đại bác",
	"Pôtđơluy":"Lúc giận bạn đừng làm gì hết,Có khi nào bạn giăng buồm giữa lúc bão tố không?",
	"Giônathan Suip":"Những bác sĩ mát tay nhất thế giới là “điều độ”, “bình tĩnh” và “vui vẻ”",
	"(Khuyết danh)":"Điều khôn ngoan nhất là phải luôn ghi nhớ rằng không có thành công hay thất bại nào là cuối cùng",
	"(G.G. Rútxô)":"Người sống nhiều không phải là người nhiều tuổi nhất mà chính là người đã trải đời nhiều nhất.",
	"(Tuân Tử)":"Đường tuy ngắn, không đi không đến.Việc tuy nhỏ, không làm không nên.",
	"Khổng Minh":"Tài tất phải có học, học tất phải điềm tĩnh. Không học không lấy gì phát triển được tài, không điềm tĩnh không lấy gì thành tựu được học.",
	"[Rochebrune]":"Người đàn bà luôn luôn được coi như ngang hàng với vua chúạ Người đời nịnh bợ họ vì lợi chứ không phải vì yêu",
	"[Danh ngôn Ba Tư]":"Người đàn bà khôn ngoan là người có nhiều điều muốn nói nhưng không nói ra",
	"[Ẹ Augier]":"Đối với người đàn ông, tha thứ điều gì cũng được, nhưng lãng quên thì chẳng bao giờ.",
	"[Auguste De Pavie]":"Đàn ông thích biểu dương trước người đàn bà đẹp, và chấp nhận thua thiệt trong bóng tốị",
	"[Jean Paul Sartre]":"Người đàn ông nào ngoài xã hội hung hăng nhất, lại là kẻ nh't nhát trong gia đình với vơ.",
	"[Naloleon ler]":"Trong tình yêu, chiến thắng của đàn ông là chạy trốn",
	"(Bloc)":"Người biết nhìn vào tương lai, sẽ không hối hận vì quá khứ.",
	"(Fionert)":"Luôn luôn hy vọng, không bao giờ tuyệt vọng. Đó là phẩm chất của con người có tâm hồn lớn.",
	
	};
	
	//dem phan tu cua mang		
	function count_array(texts){
	var lenght=0;
	for(author in texts)
		{
			lenght++;
		}
		return lenght;
	}
	
	var lenght=count_array(texts); //so phan tu mang
	
	var randno =Math.floor(Math.random()*lenght); 
	
	var dem = 0;
		for (author in texts)
		{
		if(randno==dem){
	document.write('<center><font color="'+color_text+'" size="'+size_text+'"><i>'+texts[author]+
				'</i></font><br><font color="'+color_author+'" size='+size_author+'>'+author+'</font></center>');
		} 
		dem++;
		}
