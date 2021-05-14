(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[140],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return p},kt:function(){return h}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(t),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return t?a.createElement(m,o(o({ref:n},p),{},{components:t})):a.createElement(m,o({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9078:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var a=t(2122),r=t(9756),i=(t(7294),t(3905)),o={},s={unversionedId:"examples/bart",id:"examples/bart",isDocsHomePage:!1,title:"BART Summarization",description:"This is an example explaining entire pipe line for a summarization task using pymarlin library.",source:"@site/docs/examples/bart.md",sourceDirName:"examples",slug:"/examples/bart",permalink:"/docs/examples/bart",editUrl:"https://github.com/microsoft/PyMarlin/edit/master/website/docs/examples/bart.md",version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"PyMarlin in Pictures",permalink:"/docs/marlin-in-pictures"},next:{title:"CIFAR image classification",permalink:"/docs/examples/cifar"}},l=[{value:"Download Data",id:"download-data",children:[]},{value:"Preprocess and analyze",id:"preprocess-and-analyze",children:[]},{value:"Train",id:"train",children:[]},{value:"Train on VM",id:"train-on-vm",children:[{value:"Environment setup",id:"environment-setup",children:[]},{value:"Downlaod data",id:"downlaod-data",children:[]},{value:"Transferring code",id:"transferring-code",children:[]},{value:"Install pymarlin and requirements",id:"install-pymarlin-and-requirements",children:[]},{value:"Run code",id:"run-code",children:[]},{value:"Run production config",id:"run-production-config",children:[]},{value:"Full training on single GPU",id:"full-training-on-single-gpu",children:[]},{value:"Full training on all GPUs",id:"full-training-on-all-gpus",children:[]},{value:"Start tensorboard in VM",id:"start-tensorboard-in-vm",children:[]}]},{value:"Training curves",id:"training-curves",children:[{value:"Evaluation metrices",id:"evaluation-metrices",children:[]}]},{value:"Infer",id:"infer",children:[]}],c={toc:l};function p(e){var n=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is an example explaining entire pipe line for a summarization task using pymarlin library."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/PyMarlin/tree/main/examples/bart"},"Source code location"),"."),(0,i.kt)("p",null,"Dataset used: CNN Daily mail\nModel : ","[BART]"," (",(0,i.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1910.13461"},"https://arxiv.org/abs/1910.13461"),")"),(0,i.kt)("p",null,"We start with a pretrained checkpoint from huggingface and finetune on CNN dailymail data. "),(0,i.kt)("p",null,"Huggingface Bart model documantation: ",(0,i.kt)("a",{parentName:"p",href:"https://huggingface.co/transformers/model_doc/bart.html"},"https://huggingface.co/transformers/model_doc/bart.html")),(0,i.kt)("h2",{id:"download-data"},"Download Data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"wget https://cdn-datasets.huggingface.co/summarization/cnn_dm_v2.tgz -UseBasicParsing\n\ndir 'C:/Users/krkusuk/Downloads/'\n\ntar -xzvf 'C:/Users/krkusuk/Downloads/cnn_dm_v2.tgz'  # empty lines removed\n\nmv 'cnn_cln' 'D:/data'\n\ndir 'D:/data/cnn_cln'\n")),(0,i.kt)("h2",{id:"preprocess-and-analyze"},"Preprocess and analyze"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python data.py 'D:/data/cnn_cln'\n")),(0,i.kt)("h2",{id:"train"},"Train"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python train.py --data_path D:/data/cnn_cln\n")),(0,i.kt)("h2",{id:"train-on-vm"},"Train on VM"),(0,i.kt)("p",null,"In powershell: (Run this for every cell you create)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$machine='104.210.193.245'\n$user='elr'\n$port='22'\n\n#V100\nhttps://ml.azure.com/compute/login-krishan/details/nodes?wsid=/subscriptions/42ae47bd-b19b-42c1-b0b9-19fd5be9d51b/resourcegroups/bert-base/workspaces/SubstrateIntelligenceNLR-WS3&tid=72f988bf-86f1-41af-91ab-2d7cd011db47\n\n$machine='13.85.199.246';$user='azureuser';$port='50000'\n")),(0,i.kt)("h3",{id:"environment-setup"},"Environment setup"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh $user@$machine -p $port\nbash\n\nwget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh\nbash Miniconda3-latest-Linux-x86_64.sh -y\n")),(0,i.kt)("p",null,"restart shell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nvidia-smi\nconda create -n pymarlin python=3.8 -y\nconda activate pymarlin\nconda install pytorch cudatoolkit=10.2 -c pytorch -y # make sure cuda version is same as nvidia-smi\n")),(0,i.kt)("h3",{id:"downlaod-data"},"Downlaod data"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'wget https://cdn-datasets.huggingface.co/summarization/cnn_dm_v2.tgz\ntar -xzvf cnn_dm_v2.tgz\n\nAnalyze:\n    pymarlin_Scenarios\\bart> python data.py  D:/data/cnn_cln\n    Train\n                                                source                                             target\n    0  Editor\'s note: In our Behind the Scenes series...  Mentally ill inmates in Miami are housed on th...\n    1  LONDON, England (Reuters) -- Harry Potter star...  Harry Potter star Daniel Radcliffe gets \xa320M f...\n    2  MINNEAPOLIS, Minnesota (CNN) -- Drivers who we...  NEW: "I thought I was going to die," driver sa...\n    3  BAGHDAD, Iraq (CNN) -- Dressed in a Superman s...  Parents beam with pride, can\'t stop from smili...\n    4  WASHINGTON (CNN) -- Doctors removed five small...  Five small polyps found during procedure; "non...\n    Word length analysis:\n                source         target\n    count  287112.000000  287112.000000\n    mean      691.873032      51.573752\n    std       336.498413      21.255547\n    min        18.000000       4.000000\n    25%       443.000000      38.000000\n    50%       632.000000      48.000000\n    75%       877.000000      60.000000\n    max      2347.000000    1296.000000\n    Val\n                                                source                                             target\n    0  (CNN)The only thing crazier than a guy in snow...  A man in suburban Boston is selling snow onlin...\n    1  (CNN)On the 6th of April 1996, San Jose Clash ...  The 20th MLS season begins this weekend . Leag...\n    2  (CNN)French striker Bafetimbi Gomis, who has a...  Bafetimbi Gomis collapses within 10 minutes of...\n    3  (CNN)My vote for Father of the Year goes to Cu...  Ruben Navarrette: Schilling deserves praise fo...\n    4  (CNN)It was an act of frustration perhaps more...  Rory McIlroy throws club into water at WGC Cad...\n    Word length analysis:\n                source        target\n    count  13368.000000  13368.000000\n    mean     676.026406     57.910084\n    std      343.557667     25.613557\n    min       41.000000     10.000000\n    25%      413.750000     41.000000\n    50%      608.000000     54.000000\n    75%      868.000000     69.000000\n    max     1917.000000   1440.000000\n')),(0,i.kt)("h3",{id:"transferring-code"},"Transferring code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"scp -P $port -r C:\\Users\\krkusuk\\repos\\ELR\\sources\\dev\\SubstrateInferences\\pymarlin $user@${machine}:/home/$user \nscp -P $port -r C:\\Users\\krkusuk\\repos\\ELR\\sources\\dev\\SubstrateInferences\\pymarlin_Scenarios\\bart $user@${machine}:/home/$user \n")),(0,i.kt)("h3",{id:"install-pymarlin-and-requirements"},"Install pymarlin and requirements"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> ssh $user@$machine -p $port\n$ pip install  ./pymarlin --force-reinstall\n$ pip install -r pymarlin/requirements.txt\n$ cd bart\n")),(0,i.kt)("h3",{id:"run-code"},"Run code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ python data.py ../cnn_cln # run only once\n$ python train.py --data_path ../cnn_cln\n$ python train.py --data_path ../cnn_cln --tmgr.max_train_steps_per_epoch 20 --tmgr.max_val_steps_per_epoch 20 --tmgr.epochs 3\n")),(0,i.kt)("h3",{id:"run-production-config"},"Run production config"),(0,i.kt)("p",null,"Test first\n$ python train.py --config_path config-prod.yaml --data_path ../cnn_cln --tmgr.max_train_steps_per_epoch 20 --tmgr.max_val_steps_per_epoch 20 --tmgr.epochs 2 "),(0,i.kt)("h3",{id:"full-training-on-single-gpu"},"Full training on single GPU"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nohup python train.py --config_path config-prod.yaml --data_path ../cnn_cln &> prod-logs.txt & \n[2] 5455\ntail -f prod-logs.txt\n")),(0,i.kt)("h3",{id:"full-training-on-all-gpus"},"Full training on all GPUs"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nohup python -m torch.distributed.launch --nproc_per_node 4 train.py --config_path config-prod.yaml --data_path ../cnn_cln --dist &> prod-logs-dist.txt & \ntail -f  prod-logs-dist.txt\n")),(0,i.kt)("h4",{id:"kill-all-processes"},"Kill all processes"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ps |grep python | awk '{print $1}' | xargs -I% kill -9 %\n")),(0,i.kt)("h3",{id:"start-tensorboard-in-vm"},"Start tensorboard in VM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ tensorboard --logdir .\n")),(0,i.kt)("h4",{id:"tunnel-tensorboard-in-local-machine"},"Tunnel tensorboard in local machine"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# ssh -N -f -L 127.0.0.1:6006:127.0.0.1:6006  $user@${machine} -p $port\n")),(0,i.kt)("p",null,"Now open tensorboard: http://localhost:6006/#scalars"),(0,i.kt)("h2",{id:"training-curves"},"Training curves"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tb",src:t(8912).Z})),(0,i.kt)("h3",{id:"evaluation-metrices"},"Evaluation metrices"),(0,i.kt)("p",null,"Paper Result:\nR1 R2 RL\n44.16 21.28 40.90"),(0,i.kt)("p",null,"Before training (1000 val steps)\npython train.py --config_path config-prod.yaml --data_path ../cnn_cln --dist False --tmgr.disable_tqdm False --gpu_batch_size_limit 32 ","[--tmgr.max_val_steps_per_epoch 1000]","\nmetrics/rouge : {'rouge1': 21.443, 'rouge2': 7.9516, 'rougeL': 16.5086, 'rougeLsum': 19.4402}"),(0,i.kt)("p",null,"After Training:\npython train.py --config_path config-prod.yaml --data_path ../cnn_cln --dist False --tmgr.disable_tqdm False --gpu_batch_size_limit 32 --tmgr.max_val_steps_per_epoch 1000 --chkp.load_dir ../ --chkp.load_filename trained_model.tar -- cuda 2\n{'rouge1': 26.4461, 'rouge2': 12.6203, 'rougeL': 21.6998, 'rougeLsum': 24.682}"),(0,i.kt)("p",null,"Samples:"),(0,i.kt)("p",null,"True summaries:"),(0,i.kt)("p",null,"['A man in suburban Boston is selling snow online to customers in warmer states . For $89, he will ship 6 pounds of snow in an insulated Styrofoam box .',\n'The 20th MLS season begins this weekend . League has changed dramatically since its inception in 1996 . Some question whether rules regarding salary caps and transfers need to change .',\n'Bafetimbi Gomis collapses within 10 minutes of kickoff at Tottenham . But he reportedly left the pitch conscious and wearing an oxygen mask . Gomis later said that he was \"feeling well\" The incident came three years after Fabrice Muamba collapsed at White Hart Lane .',\n'Ruben Navarrette: Schilling deserves praise for taking on online haters for offensive comments about his daughter . Navarrette: In protecting his child, Schilling set a model for parenting and taught us a lesson about social media .',\n'Rory McIlroy throws club into water at WGC Cadillac Championship . Northern Irishman frustrated after pulling shot into water hazard .']"),(0,i.kt)("p",null,"Predicted Summaries:\n","['Self-styled entrepreneur Kyle Waring is selling snow in insulated Styrofoam',\n'The MLS is set to mark the beginning of its 20th season . Attendances have',\n\"French striker Bafetimbi Gomis collapses during Swansea's 3-2\",\n'Gabby Schilling, 17, was harassed by a group of Twitter trolls . Sch',\n'Rory McIlroy pulls his second shot on the eighth hole of the WGC']"),(0,i.kt)("p",null,"Clearly the target summaries are longer than the predictions, but the summaries are of very high quality. With some parameter changes to decoding beam search, ROUGE scores can be improved. "),(0,i.kt)("p",null,"Now let's add these params to our config file and pass them to the generate function of BART.\ngenerate:\nmax_length: 128\ndo_sample : False\nnum_beams : 5"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python train.py --config_path config-prod.yaml --data_path ../cnn_cln --dist False --tmgr.disable_tqdm False --gpu_batch_size_limit 32 --tmgr.max_val_steps_per_epoch 100 --chkp.load_dir ../ --chkp.load_filename trained_model.tar -- cuda 2\n\nmetrics/rouge : {'rouge1': 33.1999, 'rouge2': 13.6649, 'rougeL': 24.1031, 'rougeLsum': 30.2454}\n\n['A man in suburban Boston is selling snow online to customers in warmer states . For $89, he will ship 6 pounds of snow in an insulated Styrofoam box .', 'The 20th MLS season begins this weekend . League has changed dramatically since its inception in 1996 . Some question whether rules regarding salary caps and transfers need to change .', 'Bafetimbi Gomis collapses within 10 minutes of kickoff at Tottenham . But he reportedly left the pitch conscious and wearing an oxygen mask . Gomis later said that he was \"feeling well\" The incident came three years after Fabrice Muamba collapsed at White Hart Lane .', 'Ruben Navarrette: Schilling deserves praise for taking on online haters for offensive comments about his daughter . Navarrette: In protecting his child, Schilling set a model for parenting and taught us a lesson about social media .', 'Rory McIlroy throws club into water at WGC Cadillac Championship . Northern Irishman frustrated after pulling shot into water hazard .']\n['Self-styled entrepreneur Kyle Waring will ship 6 pounds of Boston-area snow in an insulated Styrofoam box . \"We will not ship snow to any states in the northeast!\" says Waring\\'s website, ShipSnowYo.com . His website and social media accounts claim to have filled more than 133 orders for snow .', 'The MLS is set to mark the beginning of its 20th season . Attendances are higher than ever before while the number of teams involved has doubled . The new season is the first of a new domestic TV and media rights deal with FOX, ESPN and Univision worth $700 million over eight years .', 'French striker Bafetimbi Gomis collapses during Swansea\\'s 3-2 loss at Tottenham . The 29-year-old left the pitch conscious following about five minutes of treatment . Swansea manager Garry Monk says he is now \"feeling well\"', \"Curt Schilling is the father of the year for his daughter Gabby Schilling . Schilling's daughter, 17, was sent a tweet congratulating her on being accepted to Salve Regina University . The tweets quickly went from immature, to creepy, to repugnant, Schilling says . He says social media sites like Twitter, Facebook, Instagram and others allow sharing of information .\", 'Rory McIlroy pulls his second shot on the eighth hole of the WGC Cadillac Championship into a lake . The four-time major winner launched the 3-iron used to play the offending shot into the water . The Northern Irishman composed himself to finish with a second round of 70, leaving him one-under for the tournament .']\n")),(0,i.kt)("p",null,"The intuition works! The results are closer to paper results. Leaving it to the users to tune further hyper parameters."),(0,i.kt)("h2",{id:"infer"},"Infer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python infer.py --model_path checkpoints --model_file model_2.tar\n\nHome Secretary Priti Patel warns people trying to leave UK will be turned back at airports and lashes influencers 'working' in the sun as she unveils quarantine rules for Brits returning from 30 high-risk countries\n\nSummary: </s><s>Home Secretary Priti Patel unveils quarantine rules for Brits returning from 30 high</s>\n")))}p.isMDXComponent=!0},8912:function(e,n,t){"use strict";n.Z=t.p+"assets/images/tb-c84b3b6e30e929d9f59f3a1b0136ca04.jpg"}}]);