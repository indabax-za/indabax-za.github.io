# Script to take a CSV file of speaker data and convert it to YAML
# Format of CSV file is:
# Timestamp,Email address,Full Name,What would you gain from the IndabaX conference? [200 words],What would you bring to the IndabaX? [200 words],What is your level of Machine Learning?,How would you rate your skills in [Maths],How would you rate your skills in [Coding],How would you rate your skills in [Cloud services],How would you rate your skills in [Version control],What would you like to learn more about?,"On top of the talks, I am very excited for the...",I would like these topics to be covered at the unconference (comma-separated),I would like to lead this topic at the unconference...,Which of the following best describes you?,"Affiliation (university, school, institute, company, etc.)",Faculty or department,Describe your research or experience [200 words],"Affiliation (university, school, institute, etc.)",Position,Describe your research or experience [200 words],"Affiliation (university, institute, company, etc.)",Position,Describe your work or experience [200 words],Gender,Nationality,Country of Residence,City,Ethnicity,Do you have any disabilities?,Where did you hear about the Deep Learning Indabað• South Africa?,Have you attended a Deep Learning Indaba or other machine learning conference?,T-shirt size,Dietary requirements,GitHub URL (or other relevant online VC),Website URL,Link to CV,Recruitment Opportunities,Can we share your details with our sponsors?  [Position],Can we share your details with our sponsors?  [Links],Can we share your details with our sponsors?  [Website URL],Can we share your details with our sponsors?  [CV],"Can we share your details with our sponsors?  [Provided skills, research, and experience]",Can we share your details with our sponsors?  [Demographic information],Can we share your details with our sponsors?  [Recruitment Opportunities],URL to photo,Talk title,Short talk description,Can we share your details with our sponsors?  [Share regardless of attendance],Affiliation,Short biography,Social media links (comma separated)
# Example row:
# 23/10/2022 14:37:14,ruan.vdmerwe@bytefuse.ai,Ruan van der Merwe,,,,,,,,,,,,"Research engineer, Founder",,,,,,,,,,Male,South Africa,South Africa,Stellenbosch,White,No,Deep Learning Indaba,"Deep Learning Indaba 2022, Deep Learning IndabaX South Africa 2021 roadshow",L,None,https://github.com/ruanvdmerwe,https://ruanvdmerwe.github.io/,https://za.linkedin.com/in/ruan-van-der-merwe-b87a08111,,Yes,Yes,,,Yes,Yes,Yes,https://ruanvdmerwe.github.io/assets/img/prof_pic.jpeg,Everything you need to know about transformers,"The transformer architecture introduced in 2017 has significantly impacted the deep learning field. This tutorial will cover the transformer in great detail so that you can: explain it to your CEO, train a fellow machine learning engineer, maintain a conversation with a seasoned transformer researcher. We will also do deep dives into the transformer topics that get ignored most often.",Yes,ByteFuse,"I am co-founder and a technical lead at ByteFuse, a new startup focusing on developing multimodal algorithms applied to search and optimisation tasks. I can claim that I am officially an university dropout that pursued a company, and I have an unhealthy obsession with cats and llamas.","https://ruanvdmerwe.github.io/, https://za.linkedin.com/in/ruan-van-der-merwe-b87a08111,https://github.com/ruanvdmerwe,https://twitter.com/ruanvdmerwe1"
# Example YAML output:
# - name: Ruan van der Merwe
#   image: "/images/people/vandermerwe.jpg"
#   years:
#   - Research
#   affiliation: ByteFuse
#   topic: Everything you need to know about transformers
#   talk_description: "The transformer architecture introduced in 2017 has significantly
#     impacted the deep learning field. \nThis tutorial will cover the transformer in
#     great detail so that you can: explain it to your CEO, \ntrain a fellow machine
#     learning engineer, maintain a conversation with a seasoned transformer researcher.
#     \nWe will also do deep dives into the transformer topics that get ignored most
#     often."
#   bio: "I am co-founder and a technical lead at ByteFuse, \na new startup focusing
#     on developing multimodal algorithms applied to search and optimisation tasks.
#     \nI can claim that I am officially an university dropout that pursued a company,
#     \nand I have an unhealthy obsession with cats and llamas."
#   link: modal
#   social_media:
#   - title: Website
#     link: https://ruanvdmerwe.github.io/
#     icon: ''
#   - title: LinkedIn
#     link: https://za.linkedin.com/in/ruan-van-der-merwe-b87a08111
#     icon: ''
#   - title: GitHub
#     link: https://github.com/ruanvdmerwe
#     icon: ''
#   - title: Twitter
#     link: https://twitter.com/ruanvdmerwe1
#     icon: ''

import csv
from pathlib import Path

import yaml
from tqdm import tqdm

class DownloadException(Exception):
    pass

def parse_social_media_link(link: str):
    link = link.lower().strip()
    # make sure link is valid and full
    if not link.startswith("http"):
        link = f"https://{link}"

    if "twitter" in link:
        return {"title": "Twitter", "link": link, "icon": ""}
    elif "github.com" in link:
        return {"title": "GitHub", "link": link, "icon": ""}
    elif "linkedin" in link:
        return {"title": "LinkedIn", "link": link, "icon": ""}
    elif "youtube" in link:
        return {"title": "YouTube", "link": link, "icon": ""}
    elif "facebook" in link:
        return {"title": "Facebook", "link": link, "icon": ""}
    elif "instagram" in link:
        return {"title": "Instagram", "link": link, "icon": ""}
    else:
        return {"title": "Website", "link": link, "icon": ""}


base_image_path = Path("images/people")
base_image_path.mkdir(exist_ok=True, parents=True)

with open("speakers.csv", newline="") as csvfile:
    reader = csv.DictReader(csvfile)
    speakers = []
    for row in tqdm(reader):
        name = row["Full Name"].strip()
        image = row["URL to photo"].strip()
        years = ["Research", "Applied ML & Industry", "Foundations"]
        affiliation = row["Affiliation"].strip()
        topic = row["Talk title"].strip()
        talk_description = row["Short talk description"].strip()
        bio = row["Short biography"].strip()
        link = row["Website URL"]
        social_media = []
        if row["Social media links (comma separated)"] != "":
            social_media = [
                parse_social_media_link(s)
                for s in row["Social media links (comma separated)"].split(",")
            ]
            # check if "Website" is already in social_media
            if not any(s["title"] == "Website" for s in social_media) and link != "":
                social_media.append({"title": "Website", "link": link, "icon": ""})

        first_name, *last_name = name.split(" ")
        last_name = "".join(last_name)
        image_path = base_image_path / f"{last_name.lower()}.jpg"

        speaker = {
            "name": name,
            "image": f"/{image_path}",
            "years": years,
            "affiliation": affiliation,
            "topic": topic,
            "talk_description": talk_description,
            "bio": bio,
            "link": "modal" if bio != "" else link,
            "social_media": social_media,
        }
        # download image to images folder
        import requests
        if "drive.google.com" in image:
            # download image from google drive
            file_id = image.split("/")[-2]
            image = f"https://drive.google.com/uc?export=download&id={file_id}" 
        try:
            response = requests.get(image, allow_redirects=True)
            if response.status_code != 200:
                raise DownloadException(f"Failed to download image for {name}")
        except (requests.exceptions.MissingSchema, DownloadException):
            speaker["image"] = f"image download failed: {image}"
        else:
            # check if response is jpg
            if response.headers["Content-Type"] == "image/jpeg":
                with open(image_path, "wb") as f:
                    f.write(response.content)
            else:
                # convert to jpg
                from PIL import Image, UnidentifiedImageError
                from io import BytesIO
                try:
                    im = Image.open(BytesIO(response.content)).convert("RGB")
                except UnidentifiedImageError:
                    speaker["image"] = f"image download failed: {image}"
                else:
                    im.save(image_path)
        speakers.append(speaker)

# dump to yaml file
with open("new_faculty.yml", "w") as outfile:
    yaml.dump(speakers, outfile, default_flow_style=False)
