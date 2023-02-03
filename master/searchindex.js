Search.setIndex({"docnames": ["auto_unit", "callbacks", "eval", "fit", "generated/torchtnt.framework.callbacks.BaseCSVWriter", "generated/torchtnt.framework.callbacks.GarbageCollector", "generated/torchtnt.framework.callbacks.Lambda", "generated/torchtnt.framework.callbacks.LearningRateMonitor", "generated/torchtnt.framework.callbacks.ModuleSummary", "generated/torchtnt.framework.callbacks.PyTorchProfiler", "generated/torchtnt.framework.callbacks.TQDMProgressBar", "generated/torchtnt.framework.callbacks.TensorBoardParameterMonitor", "generated/torchtnt.framework.callbacks.TorchSnapshotSaver", "index", "installation", "predict", "project_structure", "torchtnt.framework", "torchtnt.utils", "train", "unit"], "filenames": ["auto_unit.rst", "callbacks.rst", "eval.rst", "fit.rst", "generated/torchtnt.framework.callbacks.BaseCSVWriter.rst", "generated/torchtnt.framework.callbacks.GarbageCollector.rst", "generated/torchtnt.framework.callbacks.Lambda.rst", "generated/torchtnt.framework.callbacks.LearningRateMonitor.rst", "generated/torchtnt.framework.callbacks.ModuleSummary.rst", "generated/torchtnt.framework.callbacks.PyTorchProfiler.rst", "generated/torchtnt.framework.callbacks.TQDMProgressBar.rst", "generated/torchtnt.framework.callbacks.TensorBoardParameterMonitor.rst", "generated/torchtnt.framework.callbacks.TorchSnapshotSaver.rst", "index.rst", "installation.rst", "predict.rst", "project_structure.rst", "torchtnt.framework.rst", "torchtnt.utils.rst", "train.rst", "unit.rst"], "titles": ["AutoUnit", "Callbacks", "Evaluate", "Fit", "BaseCSVWriter", "GarbageCollector", "Lambda", "LearningRateMonitor", "ModuleSummary", "PyTorchProfiler", "TQDMProgressBar", "TensorBoardParameterMonitor", "TorchSnapshotSaver", "Welcome to the TorchTNT documentation!", "Installation", "Predict", "Project Structure", "Framework", "Utils", "Train", "Unit"], "terms": {"class": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 17, 18, 20], "torchtnt": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20], "framework": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16, 19, 20], "modul": [0, 2, 3, 8, 11, 15, 16, 17, 18, 20], "optim": [0, 2, 3, 7, 15, 17, 20], "lr_schedul": [0, 2, 3, 15, 17, 20], "option": [0, 2, 3, 6, 8, 12, 15, 17, 18, 19, 20], "lrschedul": [0, 17, 18], "none": [0, 2, 3, 6, 8, 12, 15, 17, 18, 19, 20], "step_lr_interv": [0, 17], "liter": [0, 17, 18], "step": [0, 2, 3, 4, 5, 6, 10, 12, 15, 17, 18, 19, 20], "epoch": [0, 6, 7, 12, 17, 19], "devic": [0, 17, 18], "log_frequency_step": [0, 17], "int": [0, 5, 8, 10, 12, 17, 18, 19], "1000": [0, 17], "precis": [0, 17, 18], "union": [0, 6, 7, 11, 17, 18], "str": [0, 4, 7, 8, 12, 17, 18], "dtype": [0, 17], "gradient_accumulation_step": [0, 17], "1": [0, 10, 17, 18], "detect_anomali": [0, 17], "bool": [0, 12, 17, 18], "fals": [0, 17, 18], "clip_grad_norm": [0, 17], "float": [0, 17, 18], "clip_grad_valu": [0, 17], "swa_param": [0, 17], "swaparam": [0, 17], "torchdynamo_param": [0, 17], "torchdynamoparam": [0, 17], "The": [0, 2, 3, 4, 5, 8, 15, 17, 18, 19, 20], "conveni": [0, 5, 17, 18, 20], "user": [0, 2, 3, 9, 12, 15, 17, 18], "who": [0, 17], "ar": [0, 1, 12, 16, 17, 18, 20], "train": [0, 3, 5, 6, 10, 12, 13, 16, 17, 18, 20], "stochast": [0, 17], "gradient": [0, 5, 17], "descent": [0, 17], "would": [0, 17], "like": [0, 17, 18], "have": [0, 12, 17, 18], "model": [0, 3, 5, 17, 18, 20], "handl": [0, 12, 17, 18], "them": [0, 17, 18], "subclass": [0, 2, 3, 15, 17, 18], "trainunit": [0, 6, 12, 17, 19], "evalunit": [0, 6, 17], "predictunit": [0, 6, 17], "implement": [0, 2, 3, 4, 15, 17, 19, 20], "train_step": [0, 3, 17, 19, 20], "eval_step": [0, 2, 3, 17, 20], "predict_step": [0, 15, 17, 20], "For": [0, 3, 12, 17, 18], "run": [0, 2, 3, 5, 6, 14, 15, 17, 18, 19, 20], "forward": [0, 17], "pass": [0, 17, 18], "part": [0, 17], "loss": [0, 2, 3, 17, 20], "comput": [0, 17, 18], "backward": [0, 3, 17, 20], "onli": [0, 10, 17, 18], "To": [0, 2, 3, 14, 15, 17], "benefit": [0, 17], "from": [0, 2, 3, 6, 8, 12, 14, 15, 17, 18, 20], "must": [0, 2, 3, 4, 5, 15, 17, 18], "compute_loss": [0, 17], "method": [0, 2, 3, 12, 15, 17], "update_metr": [0, 17], "log_metr": [0, 17], "Then": [0, 17], "us": [0, 1, 2, 8, 9, 12, 15, 17, 18, 19, 20], "evalu": [0, 3, 6, 10, 12, 13, 16, 17, 20], "predict": [0, 4, 6, 10, 13, 16, 17, 20], "fit": [0, 12, 13, 17, 20], "entri": [0, 12, 17], "point": [0, 5, 17], "normal": [0, 17], "more": [0, 12, 17, 18], "advanc": [0, 17], "custom": [0, 2, 3, 15, 17, 18], "directli": [0, 17, 18], "interfac": [0, 2, 3, 4, 15, 17, 20], "param": [0, 7, 17], "dure": [0, 4, 6, 12, 17, 19], "whether": [0, 17, 18], "everi": [0, 17], "default": [0, 4, 5, 8, 12, 17, 18], "how": [0, 3, 17, 18], "often": [0, 17], "log": [0, 7, 8, 11, 16, 17, 18], "term": [0, 17], "paramet": [0, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 17, 18, 19], "updat": [0, 5, 10, 14, 17], "either": [0, 7, 11, 17, 18], "string": [0, 4, 17, 18], "torch": [0, 2, 3, 9, 11, 15, 17, 18, 20], "mani": [0, 17], "batch": [0, 2, 3, 15, 17, 18, 20], "accumul": [0, 17], "over": [0, 17, 18], "enabl": [0, 17, 18], "anomali": [0, 17], "detect": [0, 17], "autograd": [0, 17], "engin": [0, 17], "http": [0, 8, 9, 11, 12, 14, 17, 18], "pytorch": [0, 2, 3, 8, 9, 11, 12, 13, 14, 15, 17, 18], "org": [0, 8, 9, 11, 12, 17, 18], "doc": [0, 9, 11, 17, 18], "stabl": [0, 8, 9, 11, 17, 18], "html": [0, 9, 11, 12, 17, 18], "max": [0, 17, 18, 19], "norm": [0, 17, 18], "clip": [0, 17], "gener": [0, 8, 12, 17, 18], "nn": [0, 2, 3, 15, 17, 20], "util": [0, 2, 3, 11, 12, 13, 15, 16, 17], "clip_grad_norm_": [0, 17], "valu": [0, 17, 18], "clip_grad_value_": [0, 17], "weight": [0, 17, 18], "averag": [0, 17], "torchdynamo": [0, 17], "grad_scal": [0, 17], "cuda": [0, 17, 18], "amp": [0, 17], "gradscal": [0, 17], "fp16": [0, 17], "num_optimizer_steps_complet": [0, 17], "number": [0, 5, 10, 12, 17, 18, 19], "complet": [0, 17], "support": [0, 17, 18], "avail": [0, 17, 18], "2": [0, 17, 18], "0": [0, 10, 17, 18], "higher": [0, 17], "abstract": [0, 16, 17, 18, 20], "state": [0, 2, 3, 6, 12, 15, 17, 18, 19, 20], "data": [0, 2, 3, 13, 15, 16, 17, 20], "tdata": [0, 17], "tupl": [0, 8, 17, 20], "tensor": [0, 17, 18, 20], "ani": [0, 2, 3, 8, 15, 17, 18, 20], "should": [0, 4, 12, 17, 18], "thi": [0, 4, 5, 12, 17, 18], "call": [0, 2, 3, 15, 17, 18], "object": [0, 2, 3, 15, 17, 18, 19], "which": [0, 1, 2, 3, 7, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19, 20], "return": [0, 17, 18, 19, 20], "contain": [0, 16, 17, 18, 19], "output": [0, 2, 3, 4, 15, 17, 20], "can": [0, 2, 3, 5, 14, 15, 17, 18, 20], "decor": [0, 17, 20], "inference_mod": [0, 17, 20], "improv": [0, 5, 17, 18, 20], "peform": [0, 17, 20], "interv": [0, 17, 18], "code": [0, 5, 9, 17, 20], "metric": [0, 16, 17, 18], "base": [0, 5, 17, 18, 20], "been": [0, 17, 18], "on_train_epoch_end": [0, 3, 6, 17, 20], "on_eval_epoch_end": [0, 6, 17, 20], "i": [0, 17, 18], "e": [0, 17, 20], "end": [0, 6, 12, 17], "an": [0, 2, 3, 4, 6, 7, 15, 17, 18, 19, 20], "move_data_to_devic": [0, 17], "overrid": [0, 17], "copi": [0, 17, 18], "start": [0, 6, 17, 18], "By": [0, 4, 5, 12, 17, 18], "function": [0, 2, 3, 6, 8, 17, 18, 19, 20], "copy_data_to_devic": [0, 17, 18], "A": [0, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17, 18], "properti": [0, 17, 18], "on_train_end": [0, 6, 17, 20], "note": [0, 17, 18], "swa": [0, 17], "super": [0, 2, 3, 15, 17, 20], "we": [1, 2, 3, 5, 15, 18], "offer": [1, 12, 20], "sever": [1, 18, 20], "pre": 1, "written": [1, 4, 18], "readi": 1, "out": [1, 2, 3, 15], "box": 1, "here": [2, 3, 15, 20], "lai": [2, 3, 15], "need": [2, 3, 5, 15, 20], "configur": [2, 3, 5, 15], "your": [2, 3, 15, 20], "loop": [2, 3, 5, 6, 15, 16, 17, 19], "In": [2, 3, 5, 15, 18, 20], "allow": [2, 3, 15, 18], "you": [2, 3, 14, 15, 20], "when": [2, 3, 6, 8, 15, 18], "creat": [2, 3, 5, 15], "hook": [2, 3, 15], "control": [2, 3, 15, 18], "behavior": [2, 3, 15], "differ": [2, 3, 5, 15, 16, 18, 20], "below": [2, 3, 15], "simpl": [2, 3, 15, 18], "exampl": [2, 3, 6, 15, 18, 20], "s": [2, 3, 5, 12, 15, 18], "basic": [2, 3, 15], "import": [2, 3, 5, 6, 15, 18, 20], "myevalunit": 2, "def": [2, 3, 6, 15, 20], "__init__": [2, 3, 15, 20], "self": [2, 3, 15, 20], "input": [2, 3, 15, 18, 20], "target": [2, 3, 15, 20], "binary_cross_entropy_with_logit": [2, 3, 20], "eval_unit": [2, 17], "take": [2, 3, 5, 12, 15, 17, 19], "list": [2, 3, 4, 7, 8, 12, 15, 17, 18, 19], "callback": [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 17, 19], "initi": [2, 3, 10, 15, 17, 18, 19], "init_eval_st": [2, 17], "dataload": [2, 3, 6, 12, 15, 17, 18, 19], "iter": [2, 3, 15, 17, 18, 19], "includ": [2, 3, 15, 16, 17, 18], "numpi": [2, 3, 15, 18], "etc": [2, 3, 8, 15, 18], "some": [2, 3, 15, 20], "durat": [2, 3, 15], "abov": [2, 3, 15], "max_steps_per_epoch": [2, 15, 17, 19], "20": [2, 15], "interleav": [3, 17, 18, 20], "give": 3, "immedi": 3, "feedback": 3, "about": [3, 17, 19], "perform": [3, 5], "while": [3, 18], "unit": [3, 6, 12, 13, 17], "myfitunit": 3, "_lrschedul": [3, 20], "zero_grad": [3, 20], "learn": [3, 7, 20], "rate": [3, 7, 10, 20], "schedul": [3, 7, 20], "fit_unit": 3, "both": [3, 17], "init_fit_st": [3, 17], "train_dataload": [3, 17], "eval_dataload": [3, 17], "max_epoch": [3, 17, 19], "4": [3, 18], "header_row": 4, "dir_path": 4, "delimit": 4, "t": [4, 18], "filenam": 4, "csv": 4, "write": [4, 18], "file": [4, 18], "provid": [4, 12, 18], "simplifi": [4, 16], "extend": [4, 20], "get_step_output_row": 4, "desir": 4, "row": 4, "each": [4, 5, 6, 7, 17, 18], "across": [4, 5, 12, 18], "all": [4, 5, 8, 12, 18], "process": [4, 5, 12, 18], "same": [4, 5, 12, 18, 20], "match": 4, "column": 4, "name": [4, 8, 12, 18], "defin": [4, 18], "directori": [4, 12], "path": [4, 12, 18], "where": [4, 18], "save": [4, 12, 18], "separ": [4, 18], "one": [4, 18], "tab": 4, "step_interv": 5, "period": [5, 12, 18], "synchron": [5, 18], "garbag": 5, "collect": [5, 18], "fulli": 5, "distribut": [5, 10, 18], "program": [5, 18], "multipl": [5, 18], "These": [5, 20], "commun": 5, "other": [5, 18], "especi": 5, "overal": 5, "execut": [5, 18], "therefor": 5, "gate": 5, "slowest": 5, "As": 5, "result": [5, 18], "roughli": 5, "amount": 5, "time": [5, 18], "its": 5, "otherwis": [5, 18], "straggler": 5, "python": [5, 18], "automat": 5, "trigger": 5, "possibl": 5, "make": [5, 14, 18], "lead": 5, "frequenc": [5, 12], "tune": 5, "applic": [5, 12, 18], "hand": 5, "befor": 5, "on_except": 6, "callabl": [6, 8], "ttraindata": [6, 12, 17, 19, 20], "tevaldata": [6, 17, 20], "tpredictdata": [6, 17, 20], "baseexcept": [6, 18], "on_train_start": [6, 12, 17, 20], "on_train_epoch_start": [6, 17, 20], "on_train_step_start": 6, "on_train_step_end": 6, "on_eval_start": [6, 17, 20], "on_eval_epoch_start": [6, 17, 20], "on_eval_step_start": 6, "on_eval_step_end": 6, "on_eval_end": [6, 17, 20], "on_predict_start": [6, 17, 20], "on_predict_epoch_start": [6, 17, 20], "on_predict_step_start": 6, "on_predict_step_end": 6, "on_predict_epoch_end": [6, 17, 20], "on_predict_end": [6, 17, 20], "accept": 6, "except": [6, 18], "occur": 6, "eval": [6, 12, 17], "mydataload": 6, "myunit": [6, 20], "print_on_step_start": 6, "print": [6, 8, 18], "f": [6, 18], "eval_st": [6, 17], "progress": [6, 10, 12, 17], "num_steps_complet": [6, 17], "lambda_cb": 6, "arg": [6, 8, 18], "logger": [7, 11, 13], "metriclogg": [7, 18], "logging_interv": 7, "track": [7, 17], "group": [7, 18], "associ": 7, "max_depth": 8, "type": [8, 18, 20], "process_fn": 8, "torchev": 8, "tool": [8, 13], "module_summari": 8, "_log_module_summary_t": 8, "module_input": 8, "mutablemap": 8, "dict": [8, 17, 18], "summari": [8, 18], "requir": [8, 18], "maximum": 8, "depth": 8, "keep": 8, "tabl": 8, "map": [8, 18], "kwarg": [8, 18], "want": [8, 12], "flop": 8, "activ": 8, "size": [8, 18], "rais": [8, 18], "runtimeerror": [8, 18], "If": [8, 12, 14, 18], "instal": [8, 13], "profil": [9, 18], "context": [9, 18], "manag": [9, 12, 18], "refresh_r": 10, "bar": 10, "visual": 10, "It": [10, 18], "rank": [10, 18], "environ": [10, 18], "determin": [10, 18], "get": [10, 18], "tensorboardlogg": [11, 18], "summarywrit": [11, 18], "histogram": 11, "tensorboard": [11, 18], "writer": [11, 18], "instanc": [11, 17, 18, 19], "dirpath": 12, "save_every_n_train_step": 12, "save_every_n_epoch": 12, "replic": 12, "torchsnapshot": 12, "supplement": 12, "appstatemixin": 12, "random": [12, 18], "also": [12, 14, 18], "parent": [12, 17], "snapshot": 12, "intra": 12, "glob": 12, "pattern": 12, "kei": [12, 18], "indic": [12, 18], "inform": [12, 18], "see": [12, 18], "main": [12, 16], "api_refer": 12, "valid": 12, "collis": 12, "app": [12, 18], "static": 12, "restor": 12, "restore_train_progress": 12, "true": [12, 18], "restore_train_dataload": 12, "restore_eval_progress": 12, "sinc": [12, 18], "There": 12, "addit": 12, "flag": 12, "skip": [12, 18], "load": [12, 18], "tnt": [13, 14], "librari": [13, 18], "project": 13, "structur": 13, "autounit": [13, 17], "pip": 14, "do": 14, "so": 14, "issu": [14, 18], "sure": 14, "first": 14, "latest": 14, "version": [14, 18], "master": 14, "just": 14, "git": 14, "github": 14, "com": 14, "upgrad": 14, "mypredictunit": 15, "predict_unit": [15, 17], "init_predict_st": [15, 17], "ha": [16, 18], "two": [16, 18], "compon": 16, "top": 16, "level": 16, "repo": 16, "lightweight": 16, "maintain": 16, "grab": 16, "bag": 16, "variou": 16, "independ": 16, "relat": [16, 18], "wrapper": [16, 18], "around": [16, 18], "publish": 16, "phasest": 17, "max_step": [17, 19], "evaluate_every_n_step": 17, "evaluate_every_n_epoch": 17, "phase": [17, 20], "is_last_batch": 17, "step_output": 17, "num_epochs_complet": 17, "num_steps_completed_in_epoch": 17, "state_dict": [17, 18], "load_state_dict": [17, 18], "checkpoint": [17, 18], "increment_epoch": 17, "increment_step": 17, "entry_point": 17, "entrypoint": 17, "timer": [17, 18], "train_stat": 17, "predict_st": 17, "up": 17, "3": [17, 18], "active_phas": 17, "activephas": 17, "should_stop": 17, "read": [17, 18], "termin": 17, "after": [17, 18], "current": [17, 18], "stop": [17, 18, 19], "signal": [17, 18], "metadata": [17, 19], "helper": [17, 19], "per": [17, 19], "mean": [17, 19], "until": [17, 18, 19], "exhaust": [17, 18, 19], "max_train_steps_per_epoch": 17, "max_eval_steps_per_epoch": 17, "limit": [17, 19], "infinit": [17, 18, 19], "unless": [17, 19], "init_train_st": [17, 19], "train_unit": [17, 19], "cpustat": 18, "_typenam": 18, "_field": 18, "cpu_perc": 18, "cpu_swap_perc": 18, "cpu_vm_perc": 18, "earlystopcheck": 18, "mode": 18, "min": 18, "patienc": 18, "min_delta": 18, "check_finit": 18, "threshold_mod": 18, "ab": 18, "rel": 18, "stopping_threshold": 18, "divergence_threshold": 18, "monitor": 18, "earli": 18, "given": 18, "decreas": 18, "increas": 18, "check": 18, "without": 18, "minimum": 18, "absolut": 18, "chang": 18, "qualifi": 18, "improvement_threshold": 18, "best_val": 18, "threshold": 18, "set": 18, "becom": 18, "nan": 18, "delta": 18, "between": 18, "onc": 18, "beyond": 18, "wors": 18, "than": 18, "valueerror": 18, "val": 18, "singl": 18, "element": 18, "boolean": 18, "doe": 18, "reset": 18, "back": 18, "reload": 18, "fullsyncperiodictim": 18, "timedelta": 18, "cpu_pg": 18, "processgroup": 18, "measur": 18, "elaps": 18, "propag": 18, "done": 18, "asynchron": 18, "previou": 18, "order": 18, "avoid": 18, "block": 18, "gpustat": 18, "fan_speed_perc": 18, "memory_free_mb": 18, "memory_used_mb": 18, "temperature_gpu_celsiu": 18, "temperature_memory_celsiu": 18, "utilization_gpu_perc": 18, "utilization_memory_perc": 18, "pgwrapper": 18, "pg": 18, "consist": 18, "fashion": 18, "regardless": 18, "follow": 18, "scenario": 18, "world": 18, "all_gather_object": 18, "obj_list": 18, "obj": 18, "barrier": 18, "broadcast_object_list": 18, "src": 18, "get_rank": 18, "get_world_s": 18, "scatter_object_list": 18, "output_list": 18, "input_list": 18, "rssprofil": 18, "datetim": 18, "microsecond": 18, "100000": 18, "rss": 18, "resid": 18, "baselin": 18, "store": 18, "rss_deltas_byt": 18, "100m": 18, "byte": 18, "round": 18, "captur": 18, "thread": 18, "empti": 18, "tlrschedul": 18, "alia": 18, "record": 18, "well": 18, "cumul": 18, "second": 18, "interval_time_second": 18, "most": 18, "recent": 18, "still": 18, "now": 18, "paus": 18, "export": 18, "ad": 18, "total": 18, "action_nam": 18, "yield": 18, "encapsul": 18, "scope": 18, "action": 18, "under": [18, 20], "what": 18, "enclos": 18, "total_time_second": 18, "sum": 18, "last": 18, "all_gather_tensor": 18, "gather": 18, "onto": 18, "broadcast": 18, "work": 18, "dimens": 18, "mai": 18, "case": [18, 20], "pad": 18, "trim": 18, "secur": 18, "equal": 18, "workload": 18, "sync": 18, "gathered_result": 18, "correspond": 18, "recurs": 18, "posit": 18, "argument": 18, "keyword": 18, "correct": 18, "days_to_sec": 18, "dai": 18, "convert": 18, "get_device_from_env": 18, "cpu": 18, "gpu": 18, "within": 18, "reli": 18, "local_rank": 18, "variabl": 18, "made": 18, "launcher": 18, "appropri": 18, "index": 18, "outsid": 18, "rang": 18, "get_filesystem": 18, "abstractfilesystem": 18, "filesystem": 18, "get_global_rank": 18, "env": 18, "var": 18, "instead": 18, "neither": 18, "condit": 18, "met": 18, "get_nvidia_smi_gpu_stat": 18, "stat": 18, "nvidia": 18, "smi": 18, "filenotfounderror": 18, "command": 18, "found": 18, "get_process_group_backend_from_devic": 18, "backend": 18, "get_psutil_cpu_stat": 18, "psutil": 18, "get_python_vers": 18, "runtim": 18, "8": 18, "get_tensor_size_bytes_map": 18, "get_timer_summari": 18, "get_torch_vers": 18, "12": 18, "init_from_env": 18, "device_typ": 18, "pg_backend": 18, "pg_timeout": 18, "1800": 18, "float32_matmul_precis": 18, "high": 18, "global": 18, "alreadi": 18, "launch": 18, "intend": 18, "begin": 18, "script": 18, "spmd": 18, "style": 18, "timeout": 18, "oper": 18, "against": 18, "30": 18, "minut": 18, "matrix": 18, "is_out_of_cpu_memori": 18, "oom": 18, "is_out_of_cuda_memori": 18, "is_out_of_memory_error": 18, "due": 18, "error": 18, "messag": 18, "is_torch_version_ge_1_13_1": 18, "is_torch_version_geq_1_10": 18, "is_torch_version_geq_1_11": 18, "is_torch_version_geq_1_12": 18, "is_torch_version_geq_1_13": 18, "is_torch_version_geq_1_14": 18, "is_torch_version_geq_1_8": 18, "is_torch_version_geq_1_9": 18, "is_torch_version_geq_2_0": 18, "is_window": 18, "Is": 18, "window": 18, "system": 18, "maybe_enable_tf32": 18, "condition": 18, "float32": 18, "datatyp": 18, "measure_rss_delta": 18, "rss_delta": 18, "append": 18, "rank_zero_crit": 18, "rank_zero_debug": 18, "rank_zero_error": 18, "rank_zero_info": 18, "rank_zero_print": 18, "rank_zero_warn": 18, "seed": 18, "determinist": 18, "pseudo": 18, "commonli": 18, "detail": 18, "integ": 18, "don": 18, "warn": 18, "nondeterminist": 18, "addition": 18, "cudnn": 18, "benchmark": 18, "disabl": 18, "set_deterministic_debug_mod": 18, "algorithm": 18, "sync_bool": 18, "coherence_mod": 18, "rank_zero": 18, "member": 18, "specifi": 18, "manner": 18, "5": 18, "receiv": 18, "sourc": 18, "truth": 18, "n": 18, "least": 18, "ratio": 18, "synced_v": 18, "iff": 18, "success": 18, "transfer_batch_norm_stat": 18, "src_modul": 18, "dst_modul": 18, "transfer": 18, "statist": 18, "transfer_weight": 18, "alldatasetbatchesiter": 18, "individual_dataload": 18, "iteration_strategi": 18, "alldatasetbatch": 18, "mechan": 18, "all_datasets_exhaust": 18, "finish": 18, "dataset": 18, "three": [18, 20], "till": 18, "largest": 18, "those": 18, "smallest_dataset_exhaust": 18, "smallest": 18, "restart_until_all_datasets_exhaust": 18, "restart": 18, "format": 18, "dataloader_1_nam": 18, "batch_obtained_from_dataloader_1": 18, "dataloader_2_nam": 18, "batch_obtained_from_dataloader_2": 18, "dataclass": 18, "loader": 18, "batch_siz": 18, "b": 18, "15": 18, "all_dataset_batch_strategi": 18, "stopping_mechan": 18, "stoppingmechan": 18, "combined_iter": 18, "item": 18, "6": 18, "7": 18, "9": 18, "10": 18, "11": 18, "13": 18, "14": 18, "cudadataprefetch": 18, "data_iter": 18, "num_prefetch_batch": 18, "prefetch": 18, "move": 18, "host": 18, "effect": 18, "construct": 18, "recommend": 18, "leverag": 18, "memori": 18, "pin": 18, "data_prefetch": 18, "dataiterationstrategi": 18, "dataiterationstrategyregistri": 18, "registri": 18, "roundrobin": 18, "roundrobiniter": 18, "randomizedbatchsampl": 18, "randomizedbatchsampleriter": 18, "inord": 18, "inorderiter": 18, "classmethod": 18, "multiiter": 18, "next": 18, "overridden": 18, "repetit": 18, "dataloader_nam": 18, "batch_from_dataload": 18, "in_order_strategi": 18, "multidataload": 18, "iterator_cl": 18, "ignore_empty_data": 18, "cycl": 18, "through": 18, "individu": 18, "dictionari": 18, "logic": 18, "torchdata": 18, "beta": 18, "multi": 18, "achiev": 18, "mux": 18, "mux_longest": 18, "zip": 18, "pleas": 18, "refer": [18, 20], "document": 18, "accompani": 18, "particular": 18, "randomli": 18, "sampl": 18, "anoth": 18, "randomized_batch_sampl": 18, "via": 18, "robinrobin": 18, "strategi": 18, "round_robin_strategi": 18, "csvlogger": 18, "steps_before_flush": 18, "100": 18, "log_all_rank": 18, "close": 18, "resourc": 18, "flush": 18, "necessari": 18, "filelogg": 18, "ndarrai": 18, "scalar": 18, "uniqu": 18, "log_dict": 18, "payload": 18, "add": 18, "tag": 18, "inmemorylogg": 18, "buffer": 18, "log_buff": 18, "access": 18, "jsonlogg": 18, "accuraci": 18, "23": 18, "56": 18, "pend": 18, "disk": 18, "cannot": 18, "log_hparam": 18, "hparam": 18, "hyperparamet": 18, "log_text": 18, "text": 18, "identifi": 18, "scalar_to_float": 18, "concept": 20, "repres": 20, "primari": 20, "place": 20, "organ": 20, "mutual": 20, "exclus": 20, "g": 20, "plan": 20, "my_unit": 20}, "objects": {"torchtnt": [[17, 0, 0, "-", "framework"], [18, 0, 0, "-", "utils"]], "torchtnt.framework": [[17, 1, 1, "", "AutoUnit"], [17, 1, 1, "", "Callback"], [20, 1, 1, "", "EvalUnit"], [17, 1, 1, "", "PhaseState"], [20, 1, 1, "", "PredictUnit"], [17, 1, 1, "", "Progress"], [17, 1, 1, "", "State"], [20, 1, 1, "", "TrainUnit"], [1, 0, 0, "-", "callback"], [17, 5, 1, "", "evaluate"], [17, 5, 1, "", "fit"], [17, 5, 1, "", "init_eval_state"], [17, 5, 1, "", "init_fit_state"], [17, 5, 1, "", "init_predict_state"], [19, 5, 1, "", "init_train_state"], [17, 5, 1, "", "predict"], [19, 5, 1, "", "train"]], "torchtnt.framework.AutoUnit": [[17, 2, 1, "", "clip_grad_norm"], [17, 2, 1, "", "clip_grad_value"], [17, 3, 1, "", "compute_loss"], [17, 2, 1, "", "detect_anomaly"], [17, 2, 1, "", "device"], [17, 3, 1, "", "eval_step"], [17, 2, 1, "", "grad_scaler"], [17, 2, 1, "", "gradient_accumulation_steps"], [17, 2, 1, "", "log_frequency_steps"], [17, 3, 1, "", "log_metrics"], [17, 2, 1, "", "lr_scheduler"], [17, 2, 1, "", "module"], [17, 3, 1, "", "move_data_to_device"], [17, 4, 1, "id0", "num_optimizer_steps_completed"], [17, 3, 1, "", "on_eval_epoch_end"], [17, 3, 1, "", "on_train_end"], [17, 3, 1, "", "on_train_epoch_end"], [17, 2, 1, "", "optimizer"], [17, 2, 1, "", "precision"], [17, 3, 1, "", "predict_step"], [17, 2, 1, "", "step_lr_interval"], [17, 2, 1, "", "swa_params"], [17, 2, 1, "", "torchdynamo_params"], [17, 3, 1, "", "train_step"], [17, 3, 1, "", "update_metrics"]], "torchtnt.framework.EvalUnit": [[20, 3, 1, "", "eval_step"], [20, 3, 1, "", "on_eval_end"], [20, 3, 1, "", "on_eval_epoch_end"], [20, 3, 1, "", "on_eval_epoch_start"], [20, 3, 1, "", "on_eval_start"]], "torchtnt.framework.PhaseState": [[17, 4, 1, "", "dataloader"], [17, 4, 1, "", "evaluate_every_n_epochs"], [17, 4, 1, "", "evaluate_every_n_steps"], [17, 4, 1, "", "is_last_batch"], [17, 4, 1, "", "max_epochs"], [17, 4, 1, "", "max_steps"], [17, 4, 1, "", "max_steps_per_epoch"], [17, 4, 1, "", "progress"], [17, 4, 1, "", "step_output"]], "torchtnt.framework.PredictUnit": [[20, 3, 1, "", "on_predict_end"], [20, 3, 1, "", "on_predict_epoch_end"], [20, 3, 1, "", "on_predict_epoch_start"], [20, 3, 1, "", "on_predict_start"], [20, 3, 1, "", "predict_step"]], "torchtnt.framework.Progress": [[17, 3, 1, "", "increment_epoch"], [17, 3, 1, "", "increment_step"], [17, 3, 1, "", "load_state_dict"], [17, 4, 1, "", "num_epochs_completed"], [17, 4, 1, "", "num_steps_completed"], [17, 4, 1, "", "num_steps_completed_in_epoch"], [17, 3, 1, "", "state_dict"]], "torchtnt.framework.State": [[17, 4, 1, "", "active_phase"], [17, 4, 1, "", "entry_point"], [17, 4, 1, "", "eval_state"], [17, 4, 1, "", "predict_state"], [17, 4, 1, "", "should_stop"], [17, 3, 1, "", "stop"], [17, 4, 1, "", "timer"], [17, 4, 1, "", "train_state"]], "torchtnt.framework.TrainUnit": [[20, 3, 1, "", "on_train_end"], [20, 3, 1, "", "on_train_epoch_end"], [20, 3, 1, "", "on_train_epoch_start"], [20, 3, 1, "", "on_train_start"], [20, 3, 1, "", "train_step"]], "torchtnt.framework.callback": [[1, 1, 1, "", "Callback"]], "torchtnt.framework.callbacks": [[4, 1, 1, "", "BaseCSVWriter"], [5, 1, 1, "", "GarbageCollector"], [6, 1, 1, "", "Lambda"], [7, 1, 1, "", "LearningRateMonitor"], [8, 1, 1, "", "ModuleSummary"], [9, 1, 1, "", "PyTorchProfiler"], [10, 1, 1, "", "TQDMProgressBar"], [11, 1, 1, "", "TensorBoardParameterMonitor"], [12, 1, 1, "", "TorchSnapshotSaver"]], "torchtnt.framework.callbacks.TorchSnapshotSaver": [[12, 3, 1, "", "on_train_start"], [12, 3, 1, "", "restore"]], "torchtnt.utils": [[18, 1, 1, "", "CPUStats"], [18, 1, 1, "", "EarlyStopChecker"], [18, 1, 1, "", "FullSyncPeriodicTimer"], [18, 1, 1, "", "GPUStats"], [18, 1, 1, "", "PGWrapper"], [18, 1, 1, "", "RSSProfiler"], [18, 2, 1, "", "TLRScheduler"], [18, 1, 1, "", "Timer"], [18, 5, 1, "", "all_gather_tensors"], [18, 5, 1, "", "copy_data_to_device"], [18, 0, 0, "-", "data"], [18, 5, 1, "", "days_to_secs"], [18, 5, 1, "", "get_device_from_env"], [18, 5, 1, "", "get_filesystem"], [18, 5, 1, "", "get_global_rank"], [18, 5, 1, "", "get_nvidia_smi_gpu_stats"], [18, 5, 1, "", "get_process_group_backend_from_device"], [18, 5, 1, "", "get_psutil_cpu_stats"], [18, 5, 1, "", "get_python_version"], [18, 5, 1, "", "get_tensor_size_bytes_map"], [18, 5, 1, "", "get_timer_summary"], [18, 5, 1, "", "get_torch_version"], [18, 5, 1, "", "init_from_env"], [18, 5, 1, "", "is_out_of_cpu_memory"], [18, 5, 1, "", "is_out_of_cuda_memory"], [18, 5, 1, "", "is_out_of_memory_error"], [18, 5, 1, "", "is_torch_version_ge_1_13_1"], [18, 5, 1, "", "is_torch_version_geq_1_10"], [18, 5, 1, "", "is_torch_version_geq_1_11"], [18, 5, 1, "", "is_torch_version_geq_1_12"], [18, 5, 1, "", "is_torch_version_geq_1_13"], [18, 5, 1, "", "is_torch_version_geq_1_14"], [18, 5, 1, "", "is_torch_version_geq_1_8"], [18, 5, 1, "", "is_torch_version_geq_1_9"], [18, 5, 1, "", "is_torch_version_geq_2_0"], [18, 5, 1, "", "is_windows"], [18, 0, 0, "-", "loggers"], [18, 5, 1, "", "maybe_enable_tf32"], [18, 5, 1, "", "measure_rss_deltas"], [18, 5, 1, "", "rank_zero_critical"], [18, 5, 1, "", "rank_zero_debug"], [18, 5, 1, "", "rank_zero_error"], [18, 5, 1, "", "rank_zero_info"], [18, 5, 1, "", "rank_zero_print"], [18, 5, 1, "", "rank_zero_warn"], [18, 5, 1, "", "seed"], [18, 5, 1, "", "sync_bool"], [18, 5, 1, "", "transfer_batch_norm_stats"], [18, 5, 1, "", "transfer_weights"]], "torchtnt.utils.CPUStats": [[18, 2, 1, "", "cpu_percent"], [18, 2, 1, "", "cpu_swap_percent"], [18, 2, 1, "", "cpu_vm_percent"]], "torchtnt.utils.EarlyStopChecker": [[18, 3, 1, "", "check"], [18, 4, 1, "", "check_finite"], [18, 4, 1, "", "divergence_threshold"], [18, 3, 1, "", "load_state_dict"], [18, 4, 1, "", "min_delta"], [18, 4, 1, "", "mode"], [18, 4, 1, "", "patience"], [18, 3, 1, "", "reset"], [18, 3, 1, "", "state_dict"], [18, 4, 1, "", "stopping_threshold"], [18, 4, 1, "", "threshold_mode"]], "torchtnt.utils.FullSyncPeriodicTimer": [[18, 3, 1, "", "check"]], "torchtnt.utils.GPUStats": [[18, 2, 1, "", "fan_speed_percent"], [18, 2, 1, "", "memory_free_mb"], [18, 2, 1, "", "memory_used_mb"], [18, 2, 1, "", "temperature_gpu_celsius"], [18, 2, 1, "", "temperature_memory_celsius"], [18, 2, 1, "", "utilization_gpu_percent"], [18, 2, 1, "", "utilization_memory_percent"]], "torchtnt.utils.PGWrapper": [[18, 3, 1, "", "all_gather_object"], [18, 3, 1, "", "barrier"], [18, 3, 1, "", "broadcast_object_list"], [18, 3, 1, "", "get_rank"], [18, 3, 1, "", "get_world_size"], [18, 3, 1, "", "scatter_object_list"]], "torchtnt.utils.RSSProfiler": [[18, 2, 1, "", "interval"], [18, 3, 1, "", "profile"], [18, 3, 1, "", "reset"], [18, 2, 1, "", "rss_deltas_bytes"]], "torchtnt.utils.Timer": [[18, 4, 1, "", "interval_time_seconds"], [18, 3, 1, "", "load_state_dict"], [18, 4, 1, "", "paused"], [18, 3, 1, "", "reset"], [18, 3, 1, "", "start"], [18, 3, 1, "", "state_dict"], [18, 3, 1, "", "stop"], [18, 3, 1, "", "time"], [18, 4, 1, "", "total_time_seconds"]], "torchtnt.utils.data": [[18, 1, 1, "", "AllDatasetBatchesIterator"], [18, 1, 1, "", "CudaDataPrefetcher"], [18, 1, 1, "", "DataIterationStrategy"], [18, 1, 1, "", "DataIterationStrategyRegistry"], [18, 1, 1, "", "InOrderIterator"], [18, 1, 1, "", "MultiDataLoader"], [18, 1, 1, "", "MultiIterator"], [18, 1, 1, "", "RandomizedBatchSamplerIterator"], [18, 1, 1, "", "RoundRobinIterator"]], "torchtnt.utils.data.DataIterationStrategyRegistry": [[18, 2, 1, "", "REGISTRY"], [18, 3, 1, "", "get"]], "torchtnt.utils.data.MultiDataLoader": [[18, 2, 1, "", "ignore_empty_data"], [18, 2, 1, "", "individual_dataloaders"], [18, 2, 1, "", "iteration_strategy"], [18, 2, 1, "", "iterator_cls"]], "torchtnt.utils.loggers": [[18, 1, 1, "", "CSVLogger"], [18, 1, 1, "", "FileLogger"], [18, 1, 1, "", "InMemoryLogger"], [18, 1, 1, "", "JSONLogger"], [18, 1, 1, "", "MetricLogger"], [18, 1, 1, "", "TensorBoardLogger"], [18, 5, 1, "", "scalar_to_float"]], "torchtnt.utils.loggers.CSVLogger": [[18, 3, 1, "", "close"], [18, 3, 1, "", "flush"]], "torchtnt.utils.loggers.FileLogger": [[18, 3, 1, "", "close"], [18, 3, 1, "", "flush"], [18, 3, 1, "", "log"], [18, 3, 1, "", "log_dict"], [18, 4, 1, "", "path"]], "torchtnt.utils.loggers.InMemoryLogger": [[18, 3, 1, "", "close"], [18, 3, 1, "", "flush"], [18, 3, 1, "", "log"], [18, 4, 1, "", "log_buffer"], [18, 3, 1, "", "log_dict"]], "torchtnt.utils.loggers.JSONLogger": [[18, 3, 1, "", "close"], [18, 3, 1, "", "flush"]], "torchtnt.utils.loggers.MetricLogger": [[18, 3, 1, "", "close"], [18, 3, 1, "", "log"], [18, 3, 1, "", "log_dict"]], "torchtnt.utils.loggers.TensorBoardLogger": [[18, 3, 1, "", "close"], [18, 3, 1, "", "flush"], [18, 3, 1, "", "log"], [18, 3, 1, "", "log_dict"], [18, 3, 1, "", "log_hparams"], [18, 3, 1, "", "log_text"], [18, 4, 1, "", "path"], [18, 4, 1, "", "writer"]]}, "objtypes": {"0": "py:module", "1": "py:class", "2": "py:attribute", "3": "py:method", "4": "py:property", "5": "py:function"}, "objnames": {"0": ["py", "module", "Python module"], "1": ["py", "class", "Python class"], "2": ["py", "attribute", "Python attribute"], "3": ["py", "method", "Python method"], "4": ["py", "property", "Python property"], "5": ["py", "function", "Python function"]}, "titleterms": {"autounit": 0, "callback": 1, "built": 1, "evalu": 2, "evalunit": [2, 3, 20], "entri": [2, 3, 15, 19], "point": [2, 3, 15, 19], "fit": 3, "trainunit": [3, 20], "basecsvwrit": 4, "garbagecollector": 5, "lambda": 6, "learningratemonitor": 7, "modulesummari": 8, "pytorchprofil": 9, "tqdmprogressbar": 10, "tensorboardparametermonitor": 11, "torchsnapshotsav": 12, "welcom": 13, "torchtnt": 13, "document": 13, "overview": 13, "framework": [13, 17], "api": 13, "instal": 14, "predict": 15, "predictunit": [15, 20], "project": 16, "structur": 16, "util": 18, "data": 18, "logger": 18, "train": 19, "unit": 20, "combin": 20, "multipl": 20}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})