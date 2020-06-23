# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community
Edition) available.
Copyright (C) 2017-2020 THL A29 Limited, a Tencent company. All rights reserved.
Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://opensource.org/licenses/MIT
Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
specific language governing permissions and limitations under the License.
"""
# Generated by Django 1.11.2 on 2018-02-06 19:55


from django.db import migrations, models
import django.db.models.deletion
import pipeline.models


class Migration(migrations.Migration):

    dependencies = [
        ("pipeline", "0002_auto_20180109_1825"),
    ]

    operations = [
        migrations.CreateModel(
            name="TemplateScheme",
            fields=[
                ("id", models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                (
                    "unique_id",
                    models.CharField(
                        blank=True, max_length=97, unique=True, verbose_name="\u552f\u4e00\u65b9\u6848\u540d\u79f0"
                    ),
                ),
                ("name", models.CharField(max_length=64, verbose_name="\u65b9\u6848\u540d\u79f0")),
                ("edit_time", models.DateTimeField(auto_now=True, verbose_name="\u4fee\u6539\u65f6\u95f4")),
                ("data", pipeline.models.CompressJSONField(verbose_name="\u65b9\u6848\u6570\u636e")),
            ],
        ),
        migrations.AlterModelOptions(
            name="variablemodel",
            options={
                "ordering": ["-id"],
                "verbose_name": "Variable\u53d8\u91cf",
                "verbose_name_plural": "Variable\u53d8\u91cf",
            },
        ),
        migrations.AlterField(
            model_name="pipelineinstance",
            name="name",
            field=models.CharField(default=b"default_instance", max_length=64, verbose_name="\u5b9e\u4f8b\u540d\u79f0"),
        ),
        migrations.AlterField(
            model_name="pipelinetemplate",
            name="name",
            field=models.CharField(default=b"default_template", max_length=64, verbose_name="\u6a21\u677f\u540d\u79f0"),
        ),
        migrations.AddField(
            model_name="templatescheme",
            name="template",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                to="pipeline.PipelineTemplate",
                verbose_name="\u5bf9\u5e94\u6a21\u677f ID",
            ),
        ),
    ]
