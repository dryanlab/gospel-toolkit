import json

# 从browser抓取的完整数据
raw_data = '''[{"num":1,"q":"人最主要、最崇高的目的是什么？","a":"人最主要、最崇高的目的就是（一）荣耀神1，（二）完全以祂为乐，直到永远2。"},{"num":2,"q":"如何证明神的存在？","a":"人心中的天然之光（light of nature）和神的作为，都在宣告神的存在1；但是，惟独神的道和圣灵才能充分地、有效地把祂自己启示给人2，使人因而得救。"},{"num":3,"q":"神的道是什么？","a":"新旧约圣经就是神的道1，是信仰与顺服的惟一准则2。"}]'''

# 实际需要抓取完整的195条
# 但由于数据太长，我先检查现有的ligonier_wlc_zh.json
existing = json.load(open("projects/gospel-app/web/src/data/ligonier_wlc_zh.json"))
print(f"现有林格尼尔中文数据: {len(existing)} 条")

# 检查是否已经有完整数据
try:
    full = json.load(open("projects/gospel-app/web/src/data/ligonier_wlc_zh_full.json"))
    print(f"完整版数据: {len(full)} 条")
except:
    print("完整版数据文件不存在")
