<template>
<div class="manage tc">
    <button v-on:click="add">添加</button>
    <div class="input-area" v-show="showAdd">
		<input type="text" placeholder="请输入文章名称" v-model="nameValue">
        <input type="text" placeholder="请输入文章标签" v-model="tagValue">
		<button v-on:click="addName">确定</button>
	</div>
    <table>
        <tr>
            <th>文章名称</th>
            <th>Tags</th>
            <th>修改时间</th>
        </tr>
		<tr v-for="(item, index) in books">
			<td>
				{{item.name}}
			</td>
			<td>
				{{item.tag}}
			</td>
			<td>
				{{item.date}}
			</td>           
			<td v-bind:id="index"><span v-on:click="edit">编辑</span> <span v-on:click="del">删除</span></td>
		</tr>
    </table>
    <div class="wrap" v-show="showEdit">
		<div class="content">
		    <input type="text" placeholder="请输入文章名称" v-model="newName">
            <input type="text" placeholder="请输入文章标签" v-model="newTag">   
			<button v-on:click="cancel">取消</button>
			<button v-on:click="editBook">确定</button>
		</div>
	</div>
    <footer-nav v-bind:class="{'isManage':isNowPage}"></footer-nav>
</div>
</template>

<style>
	.manage{padding-bottom:50px;}
	.manage >button{width:200px; height:40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
	table{width:100%; max-width:500px; margin:0 auto; margin-top:20px;}
	.input-area input{width: 200px; height: 40px; line-height:40px; margin:20px 0; outline:none; border:1px solid #333;}
	.input-area button{ width:60px; height: 40px; line-height:40px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
	th,td{width:100px;}
	tr input{width:100px; height:30px; padding-left:10px; outline:none; border:1px solid #333;}
	.wrap{display:table; position:fixed; top:0; left:0; height:100%; width:100%; background:rgba(0,0,0,.8); z-index: 10;}
	.wrap .content{display:table-cell; vertical-align:middle;}
	.wrap .content input{height: 40px; line-height: 40px; display:block; margin:0 auto; margin-bottom:10px; font-size:16px;}
	.wrap .content button{width:100px; height: 30px; line-height: 30px; background-color:#41b883; border: none; border-radius:5px; font-size:16px; color:#fff;}
</style>

<script>
import FooterNav from '../../components/footer.vue'
export default {
    components:{
        FooterNav
    },
    data(){
        return {
            date: new Date(),
            isNowPage: true,
			showAdd: false,
            showEdit: false,
            nameValue: '',
            newName: '',
            editId:0,
            books:[
                {"name":"Quorum分析(一)","tag":"Quorum","date":"2019-12-10"},
                {"name":"Quorum分析(二)","tag":"Quorum","date":"2019-12-10"}
            ]
        };
    },
    methods:{
        add(){
			this.showAdd = true
        },
		addName(){
            var name = this.nameValue
            var tag = this.tagValue
            var date =this.dateValue
			if(name.trim() == ""){
                alert("请输入书籍名称")
            }
            else{
				var data = {}
                data.name = name
                data.tag = tag
                data.date = new Date()
				this.books.push(data)
            }
            this.showAdd = false
        },
		del(e){
			var id = e.target.offsetParent.id
			this.books.splice(id,1)
		},
		edit(e){
			var id = e.target.offsetParent.id
			this.showEdit = true
			this.editId = id
            this.newName = this.books[id].name
            this.newTag = this.books[id].tag
            this.newDate = this.books[id].date
		},
		cancel(){
			this.showEdit = false
        },
        editBook(){
            var name = this.newName
			if(name.trim() == ""){
				alert("请输入姓名")
			}else{
                this.books[this.editId].name = this.newName
                this.books[this.editId].tag = this.tag
                this.books[this.editId].date = new Date()
				this.showEdit = false
			}
		}
    }
}
</script>>