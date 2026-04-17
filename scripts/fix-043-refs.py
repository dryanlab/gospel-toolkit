#!/usr/bin/env python3
"""Add Scripture verse references to Genesis 43 companion reading.

Changes:
1. Add verse numbers (X节) after each scripture quote block in Chinese
2. Add verse numbers (vv. X-Y) after each scripture quote block in English
3. Add cross-references (42:37) for Reuben
4. Fix dream reference: second dream -> first dream (37:7)
"""

filepath = '/Users/suyan/agents/shared/projects/gospel-app/content/readings/genesis/043.md'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

original = content
ok = 0
fail = 0

def safe_replace(content, old, new, desc, count=1):
    global ok, fail
    n = content.count(old)
    if n == 0:
        print(f"FAIL: {desc} - pattern not found")
        fail += 1
        return content
    if n > 1 and count == 1:
        print(f"WARN: {desc} - found {n} times, replacing first only")
    result = content.replace(old, new, count)
    if result != content:
        ok += 1
        print(f"  OK: {desc}")
    return result


# ==========================================
# Chinese 正文 - verse references
# ==========================================

# 43:1-5 end of first scripture block
content = safe_replace(content,
    "因为那人对我们说：'你们的兄弟若不与你们同来，你们就不得见我的面。'\"",
    "因为那人对我们说：'你们的兄弟若不与你们同来，你们就不得见我的面。'\"（1-5节）",
    "CN 43:1-5")

# 43:6-7
content = safe_replace(content,
    "焉能知道他要说：'必须把你们的兄弟带下来呢'？\"",
    "焉能知道他要说：'必须把你们的兄弟带下来呢'？\"（6-7节）",
    "CN 43:6-7")

# 43:8-10
content = safe_replace(content,
    "我们若没有耽搁，如今第二次都回来了。\"",
    "我们若没有耽搁，如今第二次都回来了。\"（8-10节）",
    "CN 43:8-10")

# 42:37 cross-ref for Reuben
content = safe_replace(content,
    "流便在上一章提出用自己两个儿子的命担保，那是愚昧的话。",
    "流便在上一章提出用自己两个儿子的命担保（42:37），那是愚昧的话。",
    "CN cross-ref 42:37")

# 43:11-14
content = safe_replace(content,
    "释放你们的那弟兄和便雅悯回来。我若丧了儿子，就丧了吧！\"",
    "释放你们的那弟兄和便雅悯回来。我若丧了儿子，就丧了吧！\"（11-14节）",
    "CN 43:11-14")

# 43:15-16
content = safe_replace(content,
    "要宰杀牲畜，预备筵席，因为晌午这些人同我吃饭。\"",
    "要宰杀牲畜，预备筵席，因为晌午这些人同我吃饭。\"（15-16节）",
    "CN 43:15-16")

# 43:17-18
content = safe_replace(content,
    "强取我们为奴仆，抢夺我们的驴。\"",
    "强取我们为奴仆，抢夺我们的驴。\"（17-18节）",
    "CN 43:17-18")

# 43:19-22
content = safe_replace(content,
    "不知道先前谁把银子放在我们的口袋里。\"",
    "不知道先前谁把银子放在我们的口袋里。\"（19-22节）",
    "CN 43:19-22")

# 43:23
content = safe_replace(content,
    "你们的银子，我早已收了。\"他就把西缅带出来交给他们。",
    "你们的银子，我早已收了。\"他就把西缅带出来交给他们。（23节）",
    "CN 43:23")

# 43:24-25
content = safe_replace(content,
    "他们预备那礼物，等候约瑟晌午来，因为他们听见要在那里吃饭。",
    "他们预备那礼物，等候约瑟晌午来，因为他们听见要在那里吃饭。（24-25节）",
    "CN 43:24-25")

# 43:26-28
content = safe_replace(content,
    "他们回答说：\"你仆人我们的父亲平安，他还在。\"于是他们低头下拜。",
    "他们回答说：\"你仆人我们的父亲平安，他还在。\"于是他们低头下拜。（26-28节）",
    "CN 43:26-28")

# Fix dream: second -> first (Chinese, in commentary)
content = safe_replace(content,
    "第二个梦应验了，众星向他下拜。",
    "第一个梦应验了，禾捆向他下拜（37:7）。",
    "CN fix dream ref")

# 43:29-31
content = safe_replace(content,
    "他洗了脸出来，勉强隐忍，吩咐人摆饭。",
    "他洗了脸出来，勉强隐忍，吩咐人摆饭。（29-31节）",
    "CN 43:29-31")

# 43:32-33
content = safe_replace(content,
    "都按着长幼的次序，众弟兄就彼此诧异。",
    "都按着长幼的次序，众弟兄就彼此诧异。（32-33节）",
    "CN 43:32-33")

# 43:34
content = safe_replace(content,
    "约瑟把他面前的食物分出来送给他们，但便雅悯所得的比别人多五倍。他们就饮酒，和约瑟一同宴乐。",
    "约瑟把他面前的食物分出来送给他们，但便雅悯所得的比别人多五倍。他们就饮酒，和约瑟一同宴乐。（34节）",
    "CN 43:34")


# ==========================================
# English Content - verse references
# ==========================================

# 43:1-5 (English)
content = safe_replace(content,
    "because the man said to us, 'You will not see my face again unless your brother is with you.'\"",
    "because the man said to us, 'You will not see my face again unless your brother is with you.'\" (vv. 1-5)",
    "EN 43:1-5")

# 43:6-7 (English)
content = safe_replace(content,
    "How were we to know he would say, 'Bring your brother down here'?\"",
    "How were we to know he would say, 'Bring your brother down here'?\" (vv. 6-7)",
    "EN 43:6-7")

# 43:8-10 (English)
content = safe_replace(content,
    "if we had not delayed, we could have gone and returned twice.\"",
    "if we had not delayed, we could have gone and returned twice.\" (vv. 8-10)",
    "EN 43:8-10")

# 42:37 cross-ref (English)
content = safe_replace(content,
    "In the previous chapter, Reuben proposed guaranteeing with his own two sons' lives, which was foolish.",
    "In the previous chapter, Reuben proposed guaranteeing with his own two sons' lives (42:37), which was foolish.",
    "EN cross-ref 42:37")

# 43:11-14 (English)
content = safe_replace(content,
    "As for me, if I am bereaved, I am bereaved.\"",
    "As for me, if I am bereaved, I am bereaved.\" (vv. 11-14)",
    "EN 43:11-14")

# 43:15-16 (English)
content = safe_replace(content,
    "they are to eat with me at noon.\"",
    "they are to eat with me at noon.\" (vv. 15-16)",
    "EN 43:15-16")

# 43:17-18 (English)
content = safe_replace(content,
    "and seize us as slaves and take our donkeys.\"",
    "and seize us as slaves and take our donkeys.\" (vv. 17-18)",
    "EN 43:17-18")

# 43:19-22 (English)
content = safe_replace(content,
    "We don't know who put our silver in our sacks.\"",
    "We don't know who put our silver in our sacks.\" (vv. 19-22)",
    "EN 43:19-22")

# 43:23 (English)
content = safe_replace(content,
    "I received your silver.\" Then he brought Simeon out to them.",
    "I received your silver.\" Then he brought Simeon out to them. (v. 23)",
    "EN 43:23")

# 43:24-25 (English)
content = safe_replace(content,
    "because they had heard that they were to eat there.",
    "because they had heard that they were to eat there. (vv. 24-25)",
    "EN 43:24-25")

# 43:26-28 (English)
content = safe_replace(content,
    "And they bowed down, prostrating themselves before him.",
    "And they bowed down, prostrating themselves before him. (vv. 26-28)",
    "EN 43:26-28")

# Fix dream (English)
content = safe_replace(content,
    "The second dream was fulfilled, the stars bowed down to him.",
    "The first dream was fulfilled, the sheaves bowed down to him (37:7).",
    "EN fix dream ref")

# 43:29-31 (English)
content = safe_replace(content,
    "controlling himself, said, \"Serve the food.\"",
    "controlling himself, said, \"Serve the food.\" (vv. 29-31)",
    "EN 43:29-31")

# 43:32-33 (English)
content = safe_replace(content,
    "and they looked at each other in astonishment.",
    "and they looked at each other in astonishment. (vv. 32-33)",
    "EN 43:32-33")

# 43:34 (English)
content = safe_replace(content,
    "When portions were served to them from Joseph's table, Benjamin's portion was five times as much as anyone else's. So they feasted and drank freely with him.",
    "When portions were served to them from Joseph's table, Benjamin's portion was five times as much as anyone else's. So they feasted and drank freely with him. (v. 34)",
    "EN 43:34")


# ==========================================
# 经文结构 sections - fix dream references
# ==========================================

# Chinese structure
content = safe_replace(content,
    "兄弟们向约瑟下拜，第二个梦应验。",
    "兄弟们向约瑟下拜，第一个梦应验（37:7）。",
    "CN structure fix dream")

# English structure
content = safe_replace(content,
    "the second dream is fulfilled.",
    "the first dream is fulfilled (37:7).",
    "EN structure fix dream")


# ==========================================
# Summary and write
# ==========================================

print(f"\n{'='*40}")
print(f"Total OK: {ok}, Total FAIL: {fail}")

if fail > 0:
    print("Some replacements failed! Review above.")

if content != original:
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"File written successfully. {ok} changes applied.")
else:
    print("No changes made!")
