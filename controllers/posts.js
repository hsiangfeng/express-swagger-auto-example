const handleSuccess = require('../service/handleSuccess');
const handleError = require('../service/handleError');
const Posts = require('../model/post');

const posts = {
  async getPosts(req, res) {
    /**
     * #swagger.tags = ['Posts - 貼文']
     * #swagger.description = '取得全部貼文 API'
     * #swagger.responses[200] = {
          description: 'Some description...',
          schema: {
            "status": true,
            "data": [
              {
                  "_id": "625ec5fc1e609859bc1b6d69",
                  "name": "123",
                  "tags": [
                      "感情"
                  ],
                  "type": "person",
                  "image": "",
                  "content": "qwdqwdwd",
                  "likes": 0,
                  "comments": 0,
              },
            ]
          }
        }
     }
     */
        
    const allPosts = await Posts.find();
    handleSuccess(res, allPosts);
  },
  async createdPosts(req, res) {
    /**
ref     * #swagger.tags = ['Posts - 貼文']
     * #swagger.description = '取得全部貼文 API'
     * 
     * 
     }
     */
    try {
      const { body } = req;

      if (body.content) {
        /*
          #swagger.parameters['body'] = {
            in: "body",
            type: "object",
            required: true,
            description: "資料格式",
            schema: { $ref: "#/definitions/createdPosts" }
            }
         */
        const newPost = await Posts.create({
          name: body.name,
          content: body.content,
          tags: body.tags,
          type: body.type
        })
        /*
        #swagger.responses[200] = {
          description: 'Some description...',
          schema: { $: "#/definitions/createdPosts" }
        }
        */
        handleSuccess(res, newPost);
      } else {
        handleError(res);
      }
    } catch (err){
      handleError(res, err);
    }
  },
  async getPost(req, res) {
    /**
     * #swagger.tags = ['Posts - 貼文']
     * $swagger.parameters['id'] = {
        in: 'path',
        type: 'string',
        required: true,
     }
     */
    const { id } = req.params;
    res.status(200).send(id);
  },
  async deletePost(req, res) {
    /**
     * #swagger.tags = ['Posts - 貼文']
       #swagger.security = [{ "apiKeyAuth": [] }]
     */
    const { id } = req.params;
    if(!id) {
      res.status(400).send({
        status: false,
        message: '刪除失敗'
      });
    }
    res.status(200).send({
      status: true,
      message: '刪除成功'
    });
  }
}

module.exports = posts;
