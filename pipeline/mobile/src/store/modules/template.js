/* eslint-disable */
export default {
    namespaced: true,
    state: {},
    mutations: {},
    actions: {
        getTemplate () {
            return template
        },

        getTemplateConstants() {
            return JSON.parse(template.pipeline_tree).constants
        }
    }
}

const template = {"business": {"cc_company": "", "cc_id": 2, "cc_name": "蓝鲸", "cc_owner": "", "executor": "", "id": 1, "life_cycle": "2", "resource_uri": "/o/bk_sops/api/v3/business/2/", "time_zone": "Asia/Shanghai"}, "category": "DevTools", "category_name": "开发工具", "create_time": "2019-03-26 10:27:37 +0800", "creator_name": "admin", "edit_time": "2019-03-26 11:03:44 +0800", "editor_name": "admin", "id": 59, "is_deleted": false, "name": "add_app_token", "notify_receivers": "{\"receiver_group\":[\"Maintainers\"],\"more_receiver\":\"\"}", "notify_type": "[\"email\"]", "pipeline_template": "", "pipeline_tree": "{\"activities\":{\"node941d4c7553f13b189015b8827e8a\":{\"outgoing\":\"linefa01379ecaab3c49a9632c7ceaa9\",\"incoming\":\"lineca77cd30d7823369bce22baa2044\",\"name\":\"\\u5feb\\u901f\\u6267\\u884c\\u811a\\u672c\",\"error_ignorable\":false,\"component\":{\"code\":\"job_fast_execute_script\",\"data\":{\"job_account\":{\"hook\":false,\"value\":\"root\"},\"job_script_timeout\":{\"hook\":false,\"value\":\"60\"},\"job_ip_list\":{\"hook\":false,\"value\":\"172.19.1.10\"},\"job_content\":{\"hook\":false,\"value\":\"#!\\/bin\\/bash\\nsource \\/data\\/install\\/utils.fc\\nadd_app_token ${app_code} ${app_token} \\\"${app_desc}\\\"\"},\"job_script_type\":{\"hook\":false,\"value\":\"1\"},\"job_script_param\":{\"hook\":false,\"value\":\"\"}}},\"stage_name\":\"\\u6b65\\u9aa41\",\"type\":\"ServiceActivity\",\"optional\":false,\"id\":\"node941d4c7553f13b189015b8827e8a\",\"loop\":{}},\"nodecaaead52f47535cb9177a5573ab7\":{\"outgoing\":\"line0fef1685b7de3530b5b11ca05084\",\"incoming\":\"linefa01379ecaab3c49a9632c7ceaa9\",\"name\":\"\\u53d1\\u9001\\u901a\\u77e5\",\"error_ignorable\":false,\"component\":{\"code\":\"bk_notify\",\"data\":{\"bk_notify_content\":{\"hook\":false,\"value\":\"\\u5e94\\u7528ID${app_code}\\u6dfb\\u52a0\\u6210\\u529f\"},\"bk_notify_type\":{\"hook\":false,\"value\":[\"email\"]},\"bk_receiver_group\":{\"hook\":false,\"value\":[\"Maintainers\"]},\"bk_notify_title\":{\"hook\":false,\"value\":\"\\u5e94\\u7528\\u767d\\u540d\\u5355\\u6dfb\\u52a0\"},\"bk_more_receiver\":{\"hook\":false,\"value\":\"\"}}},\"stage_name\":\"\\u6b65\\u9aa41\",\"type\":\"ServiceActivity\",\"optional\":false,\"id\":\"nodecaaead52f47535cb9177a5573ab7\",\"loop\":{}}},\"end_event\":{\"type\":\"EmptyEndEvent\",\"outgoing\":\"\",\"incoming\":\"line0fef1685b7de3530b5b11ca05084\",\"id\":\"node26a44e60e67e329ca10138364202\",\"name\":\"\"},\"outputs\":[],\"flows\":{\"lineca77cd30d7823369bce22baa2044\":{\"is_default\":false,\"source\":\"nodedae46d706bcc3255b247819c6991\",\"id\":\"lineca77cd30d7823369bce22baa2044\",\"target\":\"node941d4c7553f13b189015b8827e8a\"},\"line0fef1685b7de3530b5b11ca05084\":{\"is_default\":false,\"source\":\"nodecaaead52f47535cb9177a5573ab7\",\"id\":\"line0fef1685b7de3530b5b11ca05084\",\"target\":\"node26a44e60e67e329ca10138364202\"},\"linefa01379ecaab3c49a9632c7ceaa9\":{\"is_default\":false,\"source\":\"node941d4c7553f13b189015b8827e8a\",\"id\":\"linefa01379ecaab3c49a9632c7ceaa9\",\"target\":\"nodecaaead52f47535cb9177a5573ab7\"}},\"gateways\":{},\"line\":[{\"source\":{\"id\":\"nodedae46d706bcc3255b247819c6991\",\"arrow\":\"Right\"},\"id\":\"lineca77cd30d7823369bce22baa2044\",\"target\":{\"id\":\"node941d4c7553f13b189015b8827e8a\",\"arrow\":\"Left\"}},{\"source\":{\"id\":\"node941d4c7553f13b189015b8827e8a\",\"arrow\":\"Right\"},\"id\":\"linefa01379ecaab3c49a9632c7ceaa9\",\"target\":{\"id\":\"nodecaaead52f47535cb9177a5573ab7\",\"arrow\":\"Left\"}},{\"source\":{\"id\":\"nodecaaead52f47535cb9177a5573ab7\",\"arrow\":\"Right\"},\"id\":\"line0fef1685b7de3530b5b11ca05084\",\"target\":{\"id\":\"node26a44e60e67e329ca10138364202\",\"arrow\":\"Left\"}}],\"start_event\":{\"type\":\"EmptyStartEvent\",\"outgoing\":\"lineca77cd30d7823369bce22baa2044\",\"incoming\":\"\",\"id\":\"nodedae46d706bcc3255b247819c6991\",\"name\":\"\"},\"constants\":{\"${job_inst_id_1694}\":{\"source_tag\":\"\",\"index\":3,\"name\":\"JOB\\u4efb\\u52a1ID\",\"custom_type\":\"\",\"value\":\"\",\"show_type\":\"hide\",\"source_type\":\"component_outputs\",\"source_info\":{\"node941d4c7553f13b189015b8827e8a\":[\"job_inst_id\"]},\"key\":\"${job_inst_id_1694}\",\"validation\":\"\",\"desc\":\"\"},\"${code_cfb7}\":{\"source_tag\":\"\",\"index\":8,\"name\":\"\\u8fd4\\u56de\\u7801\",\"custom_type\":\"\",\"value\":\"\",\"show_type\":\"hide\",\"source_type\":\"component_outputs\",\"source_info\":{\"nodecaaead52f47535cb9177a5573ab7\":[\"code\"]},\"key\":\"${code_cfb7}\",\"validation\":\"\",\"desc\":\"\"},\"${app_code}\":{\"source_tag\":\"\",\"index\":0,\"name\":\"\\u5e94\\u7528ID\",\"custom_type\":\"input\",\"value\":\"\",\"show_type\":\"show\",\"source_type\":\"custom\",\"validator\":[],\"source_info\":{},\"key\":\"${app_code}\",\"validation\":\"^[a-z0-9\\\\-]{3,16}$\",\"desc\":\"\"},\"${_result_5ef9}\":{\"source_tag\":\"\",\"index\":5,\"name\":\"\\u6267\\u884c\\u7ed3\\u679c\",\"custom_type\":\"\",\"value\":\"\",\"show_type\":\"hide\",\"source_type\":\"component_outputs\",\"source_info\":{\"node941d4c7553f13b189015b8827e8a\":[\"_result\"]},\"key\":\"${_result_5ef9}\",\"validation\":\"\",\"desc\":\"\"},\"${message_d381}\":{\"source_tag\":\"\",\"index\":6,\"name\":\"\\u4fe1\\u606f\",\"custom_type\":\"\",\"value\":\"\",\"show_type\":\"hide\",\"source_type\":\"component_outputs\",\"source_info\":{\"nodecaaead52f47535cb9177a5573ab7\":[\"message\"]},\"key\":\"${message_d381}\",\"validation\":\"\",\"desc\":\"\"},\"${_result_08f4}\":{\"source_tag\":\"\",\"index\":7,\"name\":\"\\u6267\\u884c\\u7ed3\\u679c\",\"custom_type\":\"\",\"value\":\"\",\"show_type\":\"hide\",\"source_type\":\"component_outputs\",\"source_info\":{\"nodecaaead52f47535cb9177a5573ab7\":[\"_result\"]},\"key\":\"${_result_08f4}\",\"validation\":\"\",\"desc\":\"\"},\"${app_desc}\":{\"source_tag\":\"\",\"index\":2,\"name\":\"\\u5e94\\u7528\\u7b80\\u4ecb\",\"custom_type\":\"input\",\"value\":\"\",\"show_type\":\"show\",\"source_type\":\"custom\",\"validator\":[],\"source_info\":{},\"key\":\"${app_desc}\",\"validation\":\"\",\"desc\":\"\"},\"${job_inst_url_8dc8}\":{\"source_tag\":\"\",\"index\":4,\"name\":\"JOB\\u4efb\\u52a1\\u94fe\\u63a5\",\"custom_type\":\"\",\"value\":\"\",\"show_type\":\"hide\",\"source_type\":\"component_outputs\",\"source_info\":{\"node941d4c7553f13b189015b8827e8a\":[\"job_inst_url\"]},\"key\":\"${job_inst_url_8dc8}\",\"validation\":\"\",\"desc\":\"\"},\"${app_token}\":{\"source_tag\":\"\",\"index\":1,\"name\":\"\\u5e94\\u7528TOKEN\",\"custom_type\":\"input\",\"value\":\"\",\"show_type\":\"show\",\"source_type\":\"custom\",\"validator\":[],\"source_info\":{},\"key\":\"${app_token}\",\"validation\":\"^[a-zA-Z0-9\\\\-]{36}$\",\"desc\":\"\"}},\"location\":[{\"y\":150,\"x\":80,\"type\":\"startpoint\",\"id\":\"nodedae46d706bcc3255b247819c6991\"},{\"stage_name\":\"\\u6b65\\u9aa41\",\"name\":\"\\u5feb\\u901f\\u6267\\u884c\\u811a\\u672c\",\"y\":133,\"x\":300,\"type\":\"tasknode\",\"id\":\"node941d4c7553f13b189015b8827e8a\"},{\"y\":160,\"x\":753,\"type\":\"endpoint\",\"id\":\"node26a44e60e67e329ca10138364202\"},{\"stage_name\":\"\\u6b65\\u9aa41\",\"name\":\"\\u53d1\\u9001\\u901a\\u77e5\",\"y\":134,\"x\":520,\"type\":\"tasknode\",\"id\":\"nodecaaead52f47535cb9177a5573ab7\"}]}", "resource_uri": "/o/bk_sops/api/v3/template/59/", "subprocess_info": {"details": [], "subproc_has_update": false}, "template_id": 59, "time_out": 20, "version": "58d1a270b272ff9b81cbe0144fffb965"}
